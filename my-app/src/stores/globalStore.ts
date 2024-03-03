import { create } from "zustand"

interface GlobalStore {
    theme: string
    setTheme: () => void
}

export enum Theme {
    Light = 'light',
    Dark = 'dark'
}

export const useGlobalStore = create<GlobalStore>(((set, get) => ({
    theme: localStorage.getItem('theme') || Theme.Light,
    setTheme: () => {
        const selectedTheme = get().theme === Theme.Light ? Theme.Dark : Theme.Light
        localStorage.setItem('theme', selectedTheme)
        set(() => ({theme: selectedTheme}))
    }
})))