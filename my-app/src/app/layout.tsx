import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TopQuiz",
  description: "TopQuiz by Ryan Maddock",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`h-full flex flex-col px-5 md:px-24`}>
        <main className="grow flex flex-col">{children}</main>
      </body>
    </html>
  );
}
