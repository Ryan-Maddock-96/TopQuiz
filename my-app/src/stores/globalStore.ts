import { create } from "zustand"

interface GlobalStore {
    theme: string
    setTheme: () => void
}

export enum Theme {
    Light = 'light',
    Dark = 'dark'
}

export const useGlobalStore = create<GlobalStore>(((set) => ({
    theme: Theme.Light,
    setTheme: () => set((state) => (state.theme === Theme.Light ? {theme: Theme.Dark} : {theme: Theme.Light}))
})))