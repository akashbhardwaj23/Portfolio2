

// import fs from 'fs';
// import path from 'path';
// import { NextApiHandler } from 'next';
// import { NextResponse , NextRequest} from 'next/server';

// interface Props {
//     res : NextResponse;
//     req : NextRequest;
// }

// export const GET= async (req, res) => {
//   try {
//     // Path to your PDF file
//     const pdfPath = path.join(process.cwd(), "public", "resume1.pdf");

//     res.setHeader('Content-Type', 'application/pdf');


//     // Stream the PDF file to the response
//     const stream = fs.createReadStream(pdfPath);
//     stream.pipe(res);
//   } catch (error) {
//     console.error('Error serving PDF:', error);
//     res.status(500).end();
//   }
// };


