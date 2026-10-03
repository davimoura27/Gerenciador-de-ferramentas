import "./Equipments.css";
import { useEffect, useState } from "react";
import type { Equipment } from "../../types/Equipment";
import { api } from "../../api/api";
import { EquipmentTable } from "../../components/Equipments/EquipmentTable/EquipmentTable";
import { EquipmentDetails } from "../../components/Equipments/EquipmentDetails/EquipmentsDetails";
import { EquipmentForm } from "../../components/Equipments/EquipmentForm/EquipmentForm";

export function Equipments(){
    const[equipments, setEquipments] = useState<Equipment[]>([]);
    const[selectdEquipment, setSelectdEquipment] = useState<Equipment | null>(null);
    const[showFrom, setShowForm] = useState(false);
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
    const [categories, setCategories] = useState<{ id: number; name: string }[]>([]);
    const [brands, setBrands] = useState<{ id: number; name: string }[]>([]);

    useEffect(() =>{
        api.get("/equipments").then(response => {setEquipments(response.data)})
            .catch(error => {console.error(error)})

        api.get("/categories")
            .then(response => {
                setCategories(response.data);
            })
            .catch(error => {
                console.error(error);
            });

        api.get("/brands")
            .then(response => {
                setBrands(response.data);
            })
            .catch(error => {
                console.error(error);
            });

        }, []);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const equipementData = {
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
            })
        }
        
        api.post("/equipments", equipementData).then(() => {
            api.get("/equipments").then(response => {setEquipments(response.data)})
            clearForm();
            setShowForm(false);
        }).catch(error => {console.error(error)})
    }

    return(
        <div className="equipments-page">
            <div className="equipments-header">
                <h1>Equipamentos</h1>
                <p>Gerencie os equipamentos cadastrados</p>
            </div>
            <button className="new-equipment-button" onClick={() => setShowForm(true)}>
                Novo equipamento
            </button>

            {showFrom && (
               <EquipmentForm 
                    formData={formData} 
                    setFormData={setFormData} 
                    categories={categories} 
                    brands={brands} 
                    onSubmit={handleSubmit} 
                    onCancel={() => setShowForm(false)}
                />
            )}
            <EquipmentTable equipments={equipments} onSelectEquipment={setSelectdEquipment}/>

            {selectdEquipment && (
                <EquipmentDetails equipment={selectdEquipment} onClose={() => setSelectdEquipment(null)}/>
            )}
        </div>
    )
}
//Avisar o chat que funcionou e continuar o proximo passo