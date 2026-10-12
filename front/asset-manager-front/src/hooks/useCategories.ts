import { useEffect, useState } from "react";
import { createCategory, deleteCategory, getCategories, updateCategory } from "../api/categoryApi";

export function useCategories() {

    const [categories, setCategories] = useState<{ id: number; name: string }[]>([]);

    useEffect(() => {
        getCategories().then(response => {setCategories(response.data);}).catch(error => {console.error(error);});

    }, []);

    const addCategory = (name: string) => {
        return createCategory(name).then(() => {return getCategories()})
            .then(response => {setCategories(response.data)});
    }

    const editCategory = (id: number, name: string) => {
        return updateCategory(id, name).then(() => {return getCategories()})
            .then(response => {setCategories(response.data)});
    }

    const removeCategory = (id: number) => {
        return deleteCategory(id).then(() => {setCategories(prevCategory => 
            prevCategory.filter(category => category.id !== id))});
    }

    return {
        categories,
        setCategories,
        addCategory,
        editCategory,
        removeCategory
    };
}