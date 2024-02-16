"use client";

import { useEffect, useState } from "react";


const PdfViewer = () => {
    const [pdf, setPdf] = useState("");

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await fetch("/api/pdf", {
    //             headers : {
    //                 "Content-Type" : "application/pdf"
    //             }
    //         });
    //         const pdfBlob = await response.blob();
    //         const pdfUrl = URL.createObjectURL(pdfBlob);
    //         setPdf(pdfUrl);
    //     }

    //     fetchData()
    // },[])

  return (
    <div className="w-full h-screen">
        <embed src={"/resume1.pdf"} width={"100%"} height={"100%"}
    type="application/pdf"></embed>
      
    </div>
  );
};

export default PdfViewer;
