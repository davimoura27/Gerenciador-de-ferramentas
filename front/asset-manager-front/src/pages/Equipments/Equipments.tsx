import "./Equipments.css";
import type { Equipment } from "../../types/Equipment";
import { EquipmentTable } from "../../components/Equipments/EquipmentTable/EquipmentTable";
import { EquipmentDetails } from "../../components/Equipments/EquipmentDetails/EquipmentsDetails";
import { EquipmentForm } from "../../components/Equipments/EquipmentForm/EquipmentForm";
import { useEquipmentForm } from "../../hooks/useEquipmentForm";
import { useEquipments } from "../../hooks/useEquipments";
import { useCategories } from "../../hooks/useCategories";
import { useBrands } from "../../hooks/useBrands";
import { useState } from "react";

export function Equipments(){
    const [selectedEquipment, setSelectedEquipment] = useState<Equipment | null>(null);
    const [showForm, setShowForm] = useState(false);
    const {formData, setFormData, clearForm, getEquipmentData} = useEquipmentForm();
    const {equipments, addEquipment} = useEquipments();
    const {categories} = useCategories();
    const {brands} = useBrands();


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        addEquipment(getEquipmentData()).then(() => {
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

            {showForm && (
               <EquipmentForm 
                    formData={formData} 
                    setFormData={setFormData} 
                    categories={categories} 
                    brands={brands} 
                    onSubmit={handleSubmit} 
                    onCancel={() => setShowForm(false)}
                />
            )}
            <EquipmentTable equipments={equipments} onSelectEquipment={setSelectedEquipment}/>

            {selectedEquipment && (
                <EquipmentDetails equipment={selectedEquipment} onClose={() => setSelectedEquipment(null)}/>
            )}
        </div>
    )
}
//Avisar o chat que funcionou e continuar para criar a edição e exclusão dos equipamentos