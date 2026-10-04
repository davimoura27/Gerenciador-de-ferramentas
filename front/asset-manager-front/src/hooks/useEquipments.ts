import { useEffect, useState } from "react";
import type { Equipment } from "../types/Equipment";
import { createEquipments, getEquipments, updateEquipment } from "../api/equipmentApi";

export function useEquipments(){
    const [equipments, setEquipments] = useState<Equipment[]>([]);

    useEffect(() => {
        getEquipments().then(response => { setEquipments(response.data);}).catch(error => console.error(error));
    }, []);

    const addEquipment = (equipmentData: {
        name: string;
        serialNumber: string;
        model: string;
        categoryId: number;
        brandId: number;
        status: string;
        description: string;
        purchaseDate: string;
        purchaseValue: number;
    }) => {
        return createEquipments(equipmentData).then(() => { return getEquipments()})
            .then(response => {setEquipments(response.data)});
    }

    const editEquipment = (id: number, equipmentData: {
        name: string;
        serialNumber: string;
        model: string;
        categoryId: number;
        brandId: number;
        status: string;
        description: string;
        purchaseDate: string;
        purchaseValue: number;
    }) => {
        return updateEquipment(id, equipmentData).then(() => {return getEquipments()})
            .then(response => {setEquipments(response.data)})
    }

    return {
        equipments,
        setEquipments,
        addEquipment,
        editEquipment
    };
}
