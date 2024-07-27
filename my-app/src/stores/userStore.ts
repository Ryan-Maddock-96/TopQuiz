import { create } from "zustand"
import { UserInfo } from "@/types/user";
import { signOut } from "next-auth/react";

interface UserStore {
    isLoggedIn: boolean
    setIsLoggedIn: (isLoggedIn: boolean) => void
    userInfo: UserInfo | null
    getUser: (token: string) => void
}

export const useUserStore = create<UserStore>(((set, get) => ({
    isLoggedIn: false,
    setIsLoggedIn: (value: boolean) => {
        console.log(value)
        set(() => ({isLoggedIn: value}))
    },
    userInfo: null,
    getUser: async (token) => {
        const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/getuser`
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        })

        if (!response.ok) {
            signOut()
        }

        const json = await response.json()
        set(() => ({userInfo: json}))
    }
})))