import { useState } from "react";
import type { Equipment } from "../types/Equipment";

export function useEquipmentForm(){
     const [formData, setFormData] = useState({
            name: "",
            serialNumber: "",
            model: "",
            categoryId: "",
            brandId: "",
            status: "",
            description: "",
            purchaseDate: "",
            purchaseValue: ""
        });

    const clearForm = () => {
        setFormData({
            name: "",
            serialNumber: "",
            model: "",
            categoryId: "",
            brandId: "",
            status: "",
            description: "",
            purchaseDate: "",
            purchaseValue: ""
        });
    }

    const getEquipmentData = () => {
        return{
            name: formData.name,
            serialNumber: formData.serialNumber,
            model: formData.model,
            categoryId: Number(formData.categoryId),
            brandId: Number(formData.brandId),
            status: formData.status,
            description: formData.description,
            purchaseDate: formData.purchaseDate,
            purchaseValue: Number(formData.purchaseValue)
        }
    }

    const fillForm = (equipment: Equipment, brandId: number, categoryId: number) => {
        setFormData({
            name: equipment.name,
            serialNumber: equipment.serialNumber,
            model: equipment.model,
            categoryId: String(categoryId),
            brandId: String(brandId),
            status: equipment.status,
            description: equipment.description,
            purchaseDate: equipment.purchaseDate,
            purchaseValue: String(equipment.purchaseValue)
        })
    }

    return{
        formData,
        setFormData,
        clearForm,
        getEquipmentData,
        fillForm
    };
}