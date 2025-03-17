"use client";
import React, { useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";

interface RichTextRendererProps {
  content: string;
}

const RichTextRenderer: React.FC<RichTextRendererProps> = ({ content }) => {
  const quillRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (quillRef.current) {
      const quill = new Quill(quillRef.current, {
        theme: "snow",
        readOnly: true,
      });
      quill.root.innerHTML = content || "";
    }
  }, [content]);

  return <div ref={quillRef} className="quill-editor"></div>;
};

export default RichTextRenderer;