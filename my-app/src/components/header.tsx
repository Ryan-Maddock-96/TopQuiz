import { useUserStore } from '@/stores/userStore'
import { signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { BiUser } from 'react-icons/bi'

export const Header = () => {
    const {userInfo} = useUserStore()
    return (
        <nav className='flex pt-6 pb-8 items-center'>
            <Link href={'/dashboard'}>
                <Image
                    src="/logo.svg"
                    width={100}
                    height={80}
                    alt="TopQuiz Logo"
                />
            </Link>
            <div className='flex justify-end grow'>
                <a className='flex gap-2 items-center cursor-pointer hover:underline' onClick={() => signOut()}>
                    <BiUser />
                    {userInfo?.firstName} {userInfo?.lastName}
                </a>
            </div>
        </nav>
    )
}