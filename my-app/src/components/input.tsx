import { IconType } from 'react-icons'


export const Input = ({type = 'text', Icon}: {type?: string, Icon?: IconType}) => {
    return (
        <div className="input-holder flex gap-3 w-full items-center bg-[var(--block)] text-[var(--text)] pl-4 rounded-lg">
            {Icon && <Icon className="text-2xl" />}
            <input className="grow" type={type} />
        </div>
    )
}