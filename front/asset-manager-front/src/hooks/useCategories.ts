import { useEffect, useState } from "react";
import { getCategories } from "../api/categoryApi";

export function useCategories() {

    const [categories, setCategories] = useState<{ id: number; name: string }[]>([]);

    useEffect(() => {
        getCategories().then(response => {setCategories(response.data);}).catch(error => {console.error(error);});

    }, []);

    return {
        categories,
        setCategories
    };
}