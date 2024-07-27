import { useCategoryStore } from "@/stores/categoryStore"
import { FilterBlock } from "./filterBlock"

export const FilterBlocks = () => {
    const {categories} = useCategoryStore()
    return (
        <>
            { categories.length &&
                <div className="flex gap-2">
                    <FilterBlock filterName="All" />
                    {categories.map((category) => <FilterBlock key={category.id} filterName={category.name} />)}
                </div>
            }
        </>
    )
}