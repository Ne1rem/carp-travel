import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Carp Travel",
  description: "Generated by Carp Travel",
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body className="relative bg-dark-color text-white-color font-inter">
        <Header />
        {children}
        </body>
    </html>
  );
};

export default RootLayout;
