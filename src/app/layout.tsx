import type { Metadata } from "next";
import {Outfit} from "next/font/google";
import "./globals.css";
import clsx from 'clsx'


const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tech Alliance",
  description: "Created By Bishal Kc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(outfit.className, "bg-white text-black antialiased")}
      >
       
        {children}
       
      </body>
    </html>
  );
}
