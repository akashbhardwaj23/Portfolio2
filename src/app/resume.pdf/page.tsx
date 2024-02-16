"use client";

const PdfViewer = () => {
  return (
    <div className="w-full h-screen">
      <embed
        src={"/resume1.pdf"}
        width={"100%"}
        height={"100%"}
        type="application/pdf"
      ></embed>
    </div>
  );
};

export default PdfViewer;
