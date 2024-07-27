import { Quiz } from "@/stores/quizStore"
import { QuizBlock } from "./quizBlock";

export const QuizList = ({ quizList }: { quizList: Quiz[] | null }) => {
    return (
      <>
        <div>Quiz List</div>
        <div className="flex flex-col gap-5">
          {quizList ? (
            quizList.map((quiz, index) => <QuizBlock key={index} quiz={quiz} />)
          ) : (
            <div>No Active Quizes</div>
          )}
        </div>
      </>
    );
}