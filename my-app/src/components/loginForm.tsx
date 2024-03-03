'use client'
import {signIn, useSession} from 'next-auth/react'
import { FaKey, FaUserAlt } from "react-icons/fa"
import { Input } from "./input"
import { useRouter } from 'next/navigation';
import { useState } from 'react'

export const LoginForm = () => {
    const router = useRouter()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Event handler for input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // Update the corresponding state variable based on the input name
        if (name === 'username') {
            setUsername(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };
    const handleSubmit = async (e:MouseEvent) => {
        e.preventDefault()
        const response = await signIn('credentials', {username: username, password: password, redirect: false})

        if (response?.ok) {
            router.push('/dashboard')
        }
    }
    return (
        <form className="flex flex-col gap-y-8 items-center w-full">
            <Input Icon={FaUserAlt} name="username" onChange={handleInputChange} />
            <Input type="password" Icon={FaKey} name="password" onChange={handleInputChange} />
            <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}