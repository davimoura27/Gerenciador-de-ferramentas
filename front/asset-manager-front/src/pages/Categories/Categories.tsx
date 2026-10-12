import { useState } from "react";
import { CategoryTable } from "../../components/Categories/CategoryTable/CategoryTable";
import { useCategories } from "../../hooks/useCategories";
import type { Category } from "../../types/Category";
import { CategoryForm } from "../../components/Categories/CategoryForm/CategoryForm";
import "./Category.css";

export function Categories(){
    const {categories, addCategory, editCategory, removeCategory} = useCategories();
    const [name, setName] = useState("");
    const [showForm, setShowForm] = useState(false);
    const [categoryToEdit, setCategoryToEdit] = useState<{ id: number; name: string } | null>(null);

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if(categoryToEdit){
            editCategory(categoryToEdit.id, name).then(() => {
                handleCancelForm();
                alert("Categoria atualizada com sucesso")
            }).catch(error => {
                console.error(error)
                alert("Erro ao atualizar categoria")
            });            
        } else{
            addCategory(name).then(() => {
                setName("");
                handleCancelForm();
                alert("Categoria cadastrada com sucesso")
            }).catch(error => {
                console.error(error)
                alert("Erro ao cadastrar a categoria")
            });
        }
    }

    const handleEditCategory = (category: Category) => {
        setName(category.name);
        setShowForm(true);
        setCategoryToEdit(category)
    }

    const handleCancelForm = () => {
        setShowForm(false);
        setCategoryToEdit(null);
        setName("");
    }

    const handleDeleteCategory = (category: Category) => {
        const confirm = window.confirm(`Tem certeza que deseja excluir a categoria ${category.name}?`)
        if (!confirm) return;

        removeCategory(category.id).then(() => alert("Categoria exluida com sucesso"))
            .catch(error => console.error(error));
    }

    return(
        <div className="categories-page" >
            <h1>Categorias</h1>
            <button
                className="new-category-button"
                type="button"
                onClick={() => setShowForm(true)}>
                Nova categoria
            </button>
            {showForm && (
                <CategoryForm
                    name={name}
                    setName={setName}
                    categoryToEdit={categoryToEdit}
                    onSubmit={onSubmit}
                    onCancel={handleCancelForm} 
                />
            )}
                <CategoryTable 
                    categories={categories} 
                    onEditCategory={handleEditCategory} 
                    onDeleteCategory={handleDeleteCategory}
                />
        </div>
    )
}

