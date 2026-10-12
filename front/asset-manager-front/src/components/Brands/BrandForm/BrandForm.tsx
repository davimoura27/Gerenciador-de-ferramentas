
import type { FormEvent } from "react";

interface BrandFormProps {
    name: string;
    setName: (name: string) => void;
    brandToEdit: { id: number; name: string } | null;
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
    onCancel: () => void;
}

export function BrandForm({ name, setName, brandToEdit, onSubmit, onCancel }: BrandFormProps) {
    return (
        <div className="brand-form">
            <h2>{brandToEdit ? "Editar marca" : "Nova marca"}</h2>

            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="brand-name">Nome</label>
                    <input
                        id="brand-name"
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        required
                    />
                </div>

                <button type="submit">
                    {brandToEdit ? "Editar" : "Cadastrar"}
                </button>

                <button type="button" onClick={onCancel}>
                    Cancelar
                </button>
            </form>
        </div>
    );
}
