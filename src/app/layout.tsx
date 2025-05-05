import type {Metadata} from "next";
import {Geist_Mono, Inter} from "next/font/google";
import "./globals.css";
import Cursor from "@/components/cursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SUST CSE 2024",
  description: "Engineering our code for the future",
  icons: "https://sustcse24.vercel.app/sust.png"
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body
      className={`${inter.className} ${geistMono.variable} antialiased`}
    >
    <Cursor/>
    {children}
    </body>
    </html>
  );
}
