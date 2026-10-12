import { useState } from "react";
import { useBrands } from "../../hooks/useBrands"
import type { Brand } from "../../types/Brand";
import { BrandTable } from "../../components/Brands/BrandTable/BrandTable";
import { BrandForm } from "../../components/Brands/BrandForm/BrandForm";
import "./Brands.css";

export function Brands(){
    const {brands, addBrand, editBrand, removeBrand} = useBrands();
    const [name, setName] = useState("");
    const [showForm, setShowForm] = useState(false);
    const [brandToEdit, setBrandToEdit] = useState<{id: number; name: string} | null>(null);

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if(brandToEdit){
            editBrand(brandToEdit.id, name).then(() => { 
                handleCancelForm();
                alert("Marca atualizada com sucesso")
            }).catch(error => {console.error(error)
                alert("Erro ao atualizar a marca")});
        }else{
            addBrand(name).then(() => {setName("");
                handleCancelForm();
                alert("Marca cadastrada com sucesso")
            }).catch(error => {console.error(error)
                alert("Erro ao cadastrar a marca")
            });
        }
    }

    const handleEditBrand = (brand: Brand) => {
        setShowForm(true);
        setBrandToEdit(brand);
        setName(brand.name);
    }
    
    const handleCancelForm = () => {
        setShowForm(false)
        setBrandToEdit(null);
        setName("");
    }

    const handleDeleteBrand = (brand: Brand) => {
        const confirm = window.confirm(`Tem certeza que deseja excluir a marca ${brand.name}?`)
        if (!confirm) return;

        removeBrand(brand.id).then(() => alert("Marca exluida com sucesso"))
            .catch(error => console.error(error));
    }

    return(
        <div className = "brands-page" >
                    <h1>Marcas</h1>                 
            <button 
                className="new-brand-button" 
                type="button" 
                onClick={() => setShowForm(true)}>
                Nova marca
            </button>

            {showForm && 
                <BrandForm 
                    name={name}
                    setName={setName}
                    brandToEdit={brandToEdit}
                    onSubmit={onSubmit}
                    onCancel={handleCancelForm}
                />         
            }
                <BrandTable 
                    brands={brands} 
                    onEditBrand={handleEditBrand} 
                    onDeleteBrand={handleDeleteBrand} 
                />
        </div>
    )
}
