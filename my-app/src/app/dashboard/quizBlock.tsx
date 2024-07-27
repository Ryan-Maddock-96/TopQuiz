import { Quiz } from "@/stores/quizStore"
import Link from "next/link";
import { useRouter } from "next/navigation";

export const QuizBlock = ({quiz} : {quiz: Quiz}) => {
    const router = useRouter();
    return (
        <Link className="flex gap-2 items-center bg-[var(--block)] p-4" href="/quiz/[id]" as={`/quiz/${quiz.id}`}>
            <img src="https://picsum.photos/50" />
            <div className="grow">
                <div>{quiz.name}</div>
                <div className="text-[var(--text-light)]">{quiz.description}</div>
            </div>
            <div className="text-[var(--primary)]">+{quiz.points} points</div>
        </Link>
        

    )
}