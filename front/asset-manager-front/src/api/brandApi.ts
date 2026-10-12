import { api } from "./api";

export function getBrands(){
    return api.get<{id: number, name: string}[]>("/brands");
}

export function createBrands(newName: string){
    return api.post("/brands", {name: newName});
}

export function updateBrand(id: number, name: string){
    return api.put(`/brands/${id}`, {name});
}

export function deleteBrand (id: number){
    return api.delete(`/brands/${id}`);
}