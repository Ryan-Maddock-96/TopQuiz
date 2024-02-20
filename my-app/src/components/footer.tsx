'use client'
import { BiMoon } from 'react-icons/bi'
import {BsFillSunFill} from 'react-icons/bs'
import { Theme, useGlobalStore } from '../stores/globalStore'

export default function Footer() {
    const {theme, setTheme} = useGlobalStore()
    return (
    <footer className='flex justify-between py-6'>
        <div>
            Site <span className='hidden md:inline-block'>Designed and Developed</span> by <span className='text-brand'>Ryan Maddock</span>
        </div>
        <div onClick={setTheme} className='rounded-full h-9 w-9 flex justify-center items-center bg-[var(--text)] text-[var(--background)] cursor-pointer'>
            {theme == Theme.Light ? <BiMoon /> : <BsFillSunFill />}
        </div>
    </footer>
    )
}
