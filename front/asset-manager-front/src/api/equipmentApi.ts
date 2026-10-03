import type 
{ Equipment } from "../types/Equipment";
import { api } from "./api";

export function getEquipments(){
    return api.get<Equipment[]>("/equipments");
}

export function createEquipments(equipmentData: {
    name: string;
    serialNumber: string;
    model: string;
    categoryId: number;
    brandId: number;
    status: string;
    description: string;
    purchaseDate: string;
    purchaseValue: number;
}){

    return api.post("/equipments", equipmentData);
}