'use client'

import { FilterBlocks } from "@/app/dashboard/filterBlocks"
import { useUserStore } from "@/stores/userStore"
import { QuizList } from "./quizList"
import { useEffect } from "react"
import { useQuizStore } from "@/stores/quizStore"
import { useSession } from "next-auth/react"

export default function Dashboard() {
    const {userInfo} = useUserStore()
    const {quizList, getQuizList} = useQuizStore()
    const {data} = useSession()
    
    if (!quizList?.length && data?.access_token) {
        getQuizList(data?.access_token)
    }

    return (
        <>        
            <div className="flex justify-between items-center pb-10">
                <h1>Welcome back <span className="highlight">{userInfo?.firstName}</span>!</h1>
                <button>Create a Quiz</button>
            </div>
            <FilterBlocks />
            <QuizList quizList={quizList} />
        </>
    )
}