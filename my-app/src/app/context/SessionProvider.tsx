'use client'
import { SessionProvider } from "next-auth/react"

export const SeshProvider = ({children}) => {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}