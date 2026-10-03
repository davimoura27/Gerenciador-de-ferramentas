import { useState } from "react";

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

    return{
        formData,
        setFormData,
        clearForm,
        getEquipmentData
    };
}