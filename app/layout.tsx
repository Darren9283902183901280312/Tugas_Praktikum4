
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Website Praktikum 10",
  description: "rawr",
};

export default function RootLayout(
  {children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="id">
      <body>
        <Navbar/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}