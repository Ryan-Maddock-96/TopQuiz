'use client'
import { Odibee_Sans } from "next/font/google";
import Footer from "./footer"
import { useGlobalStore } from "@/stores/globalStore";
import { useUserStore } from "@/stores/userStore";
import { useEffect } from "react";
import { useSession } from "next-auth/react";

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
        if (status === 'authenticated' && !userInfo && data?.access_token) {
          getUser(data.access_token)
        }
    })

    return (
        <body className={`${font.className} ${theme} h-full flex flex-col px-5 md:px-24`}>
            <main className="grow flex flex-col">{children}</main>
            <Footer />
        </body>
    )
}