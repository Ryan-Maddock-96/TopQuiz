export const FilterBlock = ({filterName} : {filterName: string}) => {
    return (
        <div className="text-4xl py-2 w-[150px] flex justify-center bg-[var(--block)] cursor-pointer">{filterName}</div>
    )
}