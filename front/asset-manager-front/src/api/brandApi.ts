import { api } from "./api";

export function getBrands(){
    return api.get<{id: number, name: string}[]>("/brands");
}