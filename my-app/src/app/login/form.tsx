import { FaKey, FaUserAlt } from "react-icons/fa"
import { Input } from "../components/input"

export const LoginForm = () => {
    return (
        <form className="flex flex-col gap-y-8 items-center w-full">
            <Input Icon={FaUserAlt} />
            <Input type="password" Icon={FaKey} />
            <button type="submit">Submit</button>
        </form>
    )
}