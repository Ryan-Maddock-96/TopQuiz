'use client'

// import type { Metadata } from "next";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Odibee_Sans } from "next/font/google";
import { useGlobalStore } from "../stores/globalStore";
import { useUserStore } from "../stores/userStore";
import "../styles/globals.css";
import Footer from "../components/footer";

const font = Odibee_Sans({
   weight: '400',
   subsets: ['latin']
});

// export const metadata: Metadata = {
//   title: "TopQuiz",
//   description: "TopQuiz by Ryan Maddock",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {theme} = useGlobalStore()
  const router = useRouter()
  const {isLoggedIn} = useUserStore()
  
  useEffect(() => {
    router.push(isLoggedIn ? '/dashboard' : '/login');
  }, [isLoggedIn, router])

  return (
    <html lang="en">
      <body className={`${font.className} ${theme} h-full flex flex-col px-5 md:px-24`}>
        <main className="grow flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
