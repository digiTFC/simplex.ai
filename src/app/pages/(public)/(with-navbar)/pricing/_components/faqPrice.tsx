"use client"
import React, { useState } from 'react';

interface FAQData {
  title: string;
  content: string;
}

const FAQComponent = ({ faqData }: { faqData: FAQData[] }) => {

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 p-8 bg-gray-100">
      {/* Left Side */}
      <div className="w-full md:w-1/3">
        <h2 className=" text-4xl font-semibold mb-4">FAQs</h2>
        <p className="text-gray-600">
          Common questions related to security, trust, and compliance.
        </p>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-2/3">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b overflow-hidde">
            {/* Question Header */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-6 py-4 font-semibold text-gray-700 focus:outline-none"
            >
              {faq.title}
              <span className="float-right">
                {openIndex === index ? '▼' : '▶'} 
              </span>
            </button>

            {/* Answer Content */}
            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-600">
                {faq.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const faqData = [
  {
    title: "Security Reviews",
    content: "We conduct regular security reviews to ensure our platform is safe and secure."
  },
  {
    title: "Custom MSAs",
    content: "We offer custom Master Service Agreements (MSAs) tailored to your specific needs."
  },
  {
    title: "Who is our compliance vendor?",
    content: "Our compliance vendor is XYZ Compliance Solutions."
  },
  {
    title: "Where are we based?",
    content: "We are headquartered in San Francisco, California."
  },
  {
    title: "Who are your investors?",
    content: "Our investors include ABC Ventures and DEF Capital."
  },
  {
    title: "Privacy Policy",
    content: "Please refer to our detailed privacy policy on our website."
  },
  {
    title: "Terms and Conditions",
    content: "Review our terms and conditions for more information on using our services."
  }
];

export default function App() {
  return <FAQComponent faqData={faqData} />;
}