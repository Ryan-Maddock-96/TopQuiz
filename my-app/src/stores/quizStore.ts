import { create } from "zustand"

export interface Quiz {
    id: number
    name: string
    description: string
    points: number
    category: string
}

interface QuizStore {
    quizList: Quiz[] | null
    getQuizList: (token: string) => void
}

export const useQuizStore = create<QuizStore>(((set, get) => ({
    quizList: null,
    getQuizList: async (token) => {
        const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/getQuizList`
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        })

        if (response.ok) {
            const {quizList} = await response.json()
            set(() => ({quizList}))
        }

    }
})))