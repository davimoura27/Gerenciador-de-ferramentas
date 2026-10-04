import "./Equipments.css";
import type { Equipment } from "../../types/Equipment";
import { EquipmentTable } from "../../components/Equipments/EquipmentTable/EquipmentTable";
import { EquipmentDetails } from "../../components/Equipments/EquipmentDetails/EquipmentsDetails";
import { EquipmentForm } from "../../components/Equipments/EquipmentForm/EquipmentForm";
import { useEquipmentForm } from "../../hooks/useEquipmentForm";
import { useEquipments } from "../../hooks/useEquipments";
import { useCategories } from "../../hooks/useCategories";
import { useBrands } from "../../hooks/useBrands";
import React, { useState } from "react";
import { getEquipmentById } from "../../api/equipmentApi";

export function Equipments(){
    const [selectedEquipment, setSelectedEquipment] = useState<Equipment | null>(null);
    const [showForm, setShowForm] = useState(false);
    const {formData, setFormData, clearForm, getEquipmentData, fillForm} = useEquipmentForm();
    const {equipments, addEquipment, editEquipment} = useEquipments();
    const {categories} = useCategories();
    const {brands} = useBrands();
    const [equipmentToEdit, setEquipmentToEdit] = useState<Equipment | null>(null);


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if(equipmentToEdit){
            console.log("Dados enviados:", getEquipmentData());

            editEquipment(equipmentToEdit.id, getEquipmentData()).then(() => {
                clearForm();
                setEquipmentToEdit(null)
                setShowForm(false);
            }).catch(error => console.error(error))
        }else{
            addEquipment(getEquipmentData()).then(() => {
                clearForm();
                setShowForm(false);
            }).catch(error => {console.error(error)})
        }
    }

    const handleEditEquipment = (equipment: Equipment) => {
        getEquipmentById(equipment.id).then(response => {
            const fullEquipment = response.data;
            const brand = brands.find(brand => brand.name === equipment.brand)
            const category = categories.find(category => category.name === equipment.category)

            if(!brand || !category) return;
     
            setEquipmentToEdit(fullEquipment);
            fillForm(fullEquipment, brand.id , category.id)       
        })
       setShowForm(true);      
       
    }

    const handleCancelForm = () => {
        clearForm();
        setEquipmentToEdit(null);
        setShowForm(false);
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
                    onCancel={handleCancelForm}
                    equipmentToEdit={equipmentToEdit}
                />
            )}
            <EquipmentTable equipments={equipments} onSelectEquipment={setSelectedEquipment} onEditEquipment={handleEditEquipment}/>

            {selectedEquipment && (
                <EquipmentDetails equipment={selectedEquipment} onClose={() => setSelectedEquipment(null)}/>
            )}
        </div>
    )
}
//Avisar o chat que funcionou e continuar para criar exclusão dos equipamentos