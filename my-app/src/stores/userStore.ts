import { create } from "zustand"

interface UserStore {
    isLoggedIn: boolean
    setIsLoggedIn: (isLoggedIn: boolean) => void
}

export const useUserStore = create<UserStore>(((set) => ({
    isLoggedIn: false,
    setIsLoggedIn: (value: boolean) => {
        console.log(value)
        set(() => ({isLoggedIn: value}))
    }
})))