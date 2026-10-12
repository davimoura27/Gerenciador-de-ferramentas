import type { FormEvent } from "react";

interface CategoryFormProps {
    name: string;
    setName: (name: string) => void;
    categoryToEdit: {id: number, name: string} | null;
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
    onCancel: () => void;

}

export function CategoryForm ({name, setName, categoryToEdit, onSubmit, onCancel}: CategoryFormProps) {
    return (
        <div className="category-form">
            <h2>{categoryToEdit ? "Editar categoria" : "Nova categoria"}</h2>

            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="category-name">Nome</label>
                    <input
                        id="category-name"
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        required
                    />
                </div>

                <button type="submit">
                    {categoryToEdit ? "Editar" : "Cadastrar"}
                </button>

                <button type="button" onClick={onCancel}>
                    Cancelar
                </button>
            </form>
        </div>
    );
}