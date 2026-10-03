import { useEffect, useState } from "react";
import { getBrands } from "../api/brandApi";

export function useBrands(){
    const [brands, setBrands] = useState<{ id: number; name: string }[]>([]);

    useEffect(() => {
        getBrands().then(response => {setBrands(response.data);}).catch(error => {console.error(error);});

    }, []);

    return{
        brands,
        setBrands
    }
}