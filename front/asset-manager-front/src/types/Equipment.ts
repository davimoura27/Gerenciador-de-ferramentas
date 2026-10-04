export interface Equipment {
    id: number;
    assetCode: string;
    name: string;
    model: string;
    brand: string;
    category: string;
    description: string;
    status: "AVAILABLE" | "IN_USE" | "MAINTENANCE" | "DISPOSED";
    serialNumber: string;
    purchaseDate: string;
    purchaseValue: number;
    createdAt: string;
    updatedAt: string;
}