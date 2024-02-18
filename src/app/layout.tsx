import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PortFolio",
  description: "My PortFolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-900 bg-no-repeat leading-relaxed font-extrabold text-zinc-300 antialiased selection:bg-teal-300 selection:text-teal-900`}>{children}</body>
    </html>
  );
}
