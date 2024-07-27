'use client'
import { Odibee_Sans } from "next/font/google";
import Footer from "./footer"
import { useGlobalStore } from "@/stores/globalStore";
import { useUserStore } from "@/stores/userStore";
import { useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import { SessionStatus } from "@/types/nextAuth";
import { Header } from "./header";

const font = Odibee_Sans({
    weight: '400',
    subsets: ['latin']
 });

export const PageStructure = ({
    children
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
    const {status, data} = useSession()
    const {theme} = useGlobalStore()
    const {getUser, userInfo} = useUserStore()

    useEffect(() => {
      if (status === SessionStatus.Authenticated) {
        const currentTime = new Date().toISOString()
        // If Authenticated and the token has expired logout 
        if (currentTime > data.expires) {
          signOut();
        } else if(!userInfo && data?.access_token) {
          // If Authenticated but the user info hasn't been set yet get the current user
          getUser(data.access_token)
        }
      }
    })

    return (
        <body className={`${font.className} ${theme} h-full flex flex-col px-5 md:px-24`}>
            <main className="grow flex flex-col">
              {status === SessionStatus.Authenticated && <Header />}
              {children}
            </main>
            <Footer />
        </body>
    )
}