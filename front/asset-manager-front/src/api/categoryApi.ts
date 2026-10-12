import { api } from "./api";

export function getCategories(){
    return api.get<{id: number; name: string }[]>("/categories");
}

export function createCategory(newName: string){
    return api.post("/categories", {name: newName});
}

export function updateCategory(id: number, name: string){
    return api.put(`/categories/${id}`, {name});
}

export function deleteCategory(id: number){
    return api.delete(`/categories/${id}`);
}