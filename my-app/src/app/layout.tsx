import type { Metadata } from "next";
import "../styles/globals.css";
import { PageStructure } from "@/components/contentLayout";
import { SeshProvider } from "./context/SessionProvider";

export const metadata: Metadata = {
  title: "TopQuiz",
  description: "TopQuiz by Ryan Maddock",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SeshProvider>
        <PageStructure>
          {children}
        </PageStructure>
      </SeshProvider>
    </html>
  );
}
