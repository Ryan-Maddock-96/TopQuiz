"use client"
import { useEffect, useState } from 'react'
import { LoginForm } from '../../components/loginForm'
import { Socials } from '../../components/socials'
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { Loader } from '@/components/loader';
import { SessionStatus } from '@/types/nextAuth';

export default function Login() {
    const [showForm, setShowForm] = useState(false)
    const { status } = useSession()
    const router = useRouter();

    useEffect(() => {
      if (status === SessionStatus.Authenticated) {
        router.push('/dashboard')
      }
    }, [router, status])

    if (status === 'loading') {
      return <Loader />
    }

    return (
        <div className='max-w-[500px] w-full flex flex-col items-center self-center gap-y-8 grow justify-center'>
          <h1>Welcome{showForm ? ' back!' : '!'}</h1>
          {showForm ? 
            <LoginForm /> 
          : 
            <div className="flex flex-col gap-y-6 md:gap-y-8 items-center">
              <div>Please login with the demo account <span className='text-brand'>QuizMaster</span> or your account!</div>
              <button className='py-3 md:py-4 w-full text-1xl md:text-2xl' onClick={() => {}}>Login as QuizMaster</button>
              <button className='py-3 md:py-4 w-full text-1xl md:text-2xl' onClick={() => setShowForm(true)}>Login with account</button>
            </div>
          }
          <hr className='h-2 w-full' />
          <Socials />
        </div>
    )
}