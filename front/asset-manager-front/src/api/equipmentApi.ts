import type 
{ Equipment } from "../types/Equipment";
import { api } from "./api";

export function getEquipments(){
    return api.get<Equipment[]>("/equipments");
}

export function getEquipmentById(id: number) {
    return api.get<Equipment>(`/equipments/${id}`);
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

export function updateEquipment(id: number, equipmentData: {
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
    return api.put(`/equipments/${id}`, equipmentData);
}