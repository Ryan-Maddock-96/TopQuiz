import { CategoryEnum } from "@/types/category"
import { create } from "zustand"

interface Category {
    id: CategoryEnum
    name: string
}
interface CategoryStore {
    categories: Category[]
}

export const useCategoryStore = create<CategoryStore>(((set, get) => ({
    categories: [
        { id: CategoryEnum.Movies, name: 'Movies'},
        { id: CategoryEnum.TV, name: 'TV'},
        { id: CategoryEnum.Gaming, name: 'Gaming' },
        {id: CategoryEnum.Music, name : 'Music' } 
    ]
})))