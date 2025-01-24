"use client"
import Button from "@/app/components/general-components/button";
import { Titles } from "@/app/components/general-components/Titles";
import apiClient from "@/app/utils/axios/axiosConfig";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { toast } from "sonner";

const UploadFile = () => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      // Optional: Validate file type
      const allowedTypes = ["application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
      if (!allowedTypes.includes(selectedFile.type)) {
        toast.error("Only PDF and DOCX files are allowed.");
        return;
      }
      setFile(selectedFile);
    }
  };

  const handleFileUpload = async () => {
    if (!file) {
      toast.info("Select A file");
      return;
    }
    console.log(file);
    setLoading(true);

    const formData = new FormData();
    formData.append("file", file!);

    try {
      // Replace the URL with your actual API endpoint.
      await apiClient.post("http://13.91.1.165:8005/api/manage_chatbot/upload_docs/", formData);
      toast.success("File Uploaded Successfully!");
    } catch (error) {
      console.error("Error uploading the file:", error);
      toast.error("Error uploading the file.");
    } finally {
      setLoading(false);
    }
  };

  // Drag and drop hooks
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      if (acceptedFiles && acceptedFiles.length > 0) {
        setFile(acceptedFiles[0]);
      }
    },
  });

  return (
    <div className="flex-col center h-[85%]">
      <div className="max-w-lg text-center w-full p-6 center flex-col rounded-lg shadow-lg">
        <Titles
          title="Upload File"
          subTitle="Feed your chatbot with a .pdf or .docx file"
        ></Titles>

        {/* Drag-and-drop area */}
        <div
          {...getRootProps()}
          className="my-12 p-6 border-2 cursor-pointer border-dashed border-gray-300 rounded-lg text-center"
        >
          <input {...getInputProps()} />
          {file ? (
            <div>
              <p className="text-lg">{file.name}</p>
            </div>
          ) : (
            <p className="text-lg text-gray-500">Drag & drop a file here, or click to select</p>
          )}
        </div>

        {/* File input as fallback */}
        <div className="center gap-16">
          <label
            htmlFor="file"
            className="border w-[110px] py-2 rounded-lg cursor-pointer block"
          >
            Pick A File
          </label>

          <input
            type="file"
            id="file"
            onChange={handleFileChange}
            className="mb-4 p-2 hidden border border-gray-300 rounded-lg"
          />

          <div className="text-center">
            <Button
              onClick={handleFileUpload}
              disabled={loading}
              label="Upload"
              isLoading={loading}
              loadindIsWhite={false}
              className="border w-[110px] py-2 bg-white text-black rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadFile;
