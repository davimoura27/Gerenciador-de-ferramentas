import { api } from "./api";

export function getCategories(){
    return api.get<{id: number; name: string }[]>("/categories");
}