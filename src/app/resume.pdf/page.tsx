"use client";

import { useRouter } from "next/navigation";

const PdfViewer = () => {
  const router = useRouter()
  return (
    <div className="w-full h-screen">
      <embed
        src={"/resume1.pdf"}
        width={"100%"}
        height={"100%"}
        type="application/pdf"
      ></embed>

      <button className="mt-8 px-4 py-2 border border-gray-400 shadow-md" onClick={() => router.push('/')}>
          Back
      </button>
    </div>

  );
};

export default PdfViewer;
