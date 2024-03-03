'use client'
import { Loader } from "@/components/loader";
import { SessionStatus } from "@/types/nextAuth";
import { useSession } from "next-auth/react"
import { useRouter } from 'next/navigation';
import { useEffect } from "react";
export default function Home() {
  const { status } = useSession()
  const router = useRouter();

  useEffect(() => {
    if (status === SessionStatus.Authenticated) { 
      router.push('/dashboard')
    } else if (status === SessionStatus.Unauthenticated) {
      router.push('/login')
    }
  }, [router, status])

  return <Loader />
}
