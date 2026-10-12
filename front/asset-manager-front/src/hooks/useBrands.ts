import { useEffect, useState } from "react";
import { createBrands, deleteBrand, getBrands, updateBrand } from "../api/brandApi";

export function useBrands(){
    const [brands, setBrands] = useState<{ id: number; name: string }[]>([]);

    useEffect(() => {
        getBrands().then(response => {setBrands(response.data);}).catch(error => {console.error(error);});

    }, []);

    const addBrand = (newName: string) => {
       return createBrands(newName).then(() => {return getBrands()})
            .then(response => {setBrands(response.data)})
    }

    const editBrand = (id: number, newName: string) => {
        return updateBrand(id, newName).then(() => {return getBrands()})
            .then(response => {setBrands(response.data)});
    }

    const removeBrand = (id: number) => {
        return deleteBrand(id).then(() => {setBrands(prevBrand => prevBrand.filter(brand => brand.id !== id))})
    }

    return{
        brands,
        setBrands,
        addBrand,
        editBrand,
        removeBrand
    }
}