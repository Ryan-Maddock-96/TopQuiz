'use client'

import { useUserStore } from "@/stores/userStore"

export default function Dashboard() {
    const {userInfo} = useUserStore()
    return (
        <div className="flex justify-between pb-10">
            <h1>Welcome back <span className="highlight">{userInfo?.firstName}</span></h1>
            <button>Create a Quiz</button>
      </div>
    )
}