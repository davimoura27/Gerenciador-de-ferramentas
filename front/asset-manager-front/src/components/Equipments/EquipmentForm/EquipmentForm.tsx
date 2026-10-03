
import type { FormEvent } from "react";

interface EquipmentFormProps {
    formData: {
        name: string;
        serialNumber: string;
        model: string;
        categoryId: string;
        brandId: string;
        status: string;
        description: string;
        purchaseDate: string;
        purchaseValue: string;
    };

    setFormData: React.Dispatch<React.SetStateAction<{
        name: string;
        serialNumber: string;
        model: string;
        categoryId: string;
        brandId: string;
        status: string;
        description: string;
        purchaseDate: string;
        purchaseValue: string;
    }>>;

    categories: { id: number; name: string }[];
    brands: { id: number; name: string }[];

    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
    onCancel: () => void;
}

export function EquipmentForm({formData, setFormData, categories, brands, onSubmit, onCancel} : EquipmentFormProps){
    return(
        <div className="equipment-form">
            <h2>Novo equipamento</h2>

            <form onSubmit={onSubmit}>
                <div>
                    <label>Nome</label>
                    <input
                        type="text"
                        value={formData.name}
                        onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                    />
                </div>
                <div>
                    <label>Modelo</label>
                    <input
                        type="text"
                        value={formData.model}
                        onChange={(event) => setFormData({ ...formData, model: event.target.value })}
                    />
                </div>
                <div>
                    <label>Categoria</label>
                    <select
                        value={formData.categoryId}
                        onChange={(event) =>
                            setFormData({ ...formData, categoryId: event.target.value })}
                    >
                        <option value="">Selecione uma categoria</option>

                        {categories.map(category => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Marca</label>
                    <select
                        value={formData.brandId}
                        onChange={(event) => setFormData({ ...formData, brandId: event.target.value })}
                    >
                        <option value="">Selecione uma marca</option>

                        {brands.map(brand => (
                            <option key={brand.id} value={brand.id}>
                                {brand.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Número de série</label>
                    <input
                        type="text"
                        value={formData.serialNumber}
                        onChange={(event) => setFormData({ ...formData, serialNumber: event.target.value })}
                    />
                </div>
                <div>
                    <label>Data de compra</label>

                    <input
                        type="date"
                        value={formData.purchaseDate}
                        onChange={(event) => setFormData({ ...formData, purchaseDate: event.target.value })}
                    />
                </div>
                <div>
                    <label>Valor de compra</label>
                    <input
                        type="number"
                        step="0.01"
                        value={formData.purchaseValue}
                        onChange={(event) => setFormData({ ...formData, purchaseValue: event.target.value })}
                    />
                </div>
                <div>
                    <label>Status</label>
                    <select
                        value={formData.status}
                        onChange={(event) => setFormData({ ...formData, status: event.target.value })}
                    >
                        <option value="">Selecione o status</option>
                        <option value="AVAILABLE">Disponível</option>
                        <option value="IN_USE">Em uso</option>
                        <option value="MAINTENANCE">Em manutenção</option>
                        <option value="DISPOSED">Descartado</option>
                    </select>
                </div>
                <div>
                    <label>Descrição</label>
                    <textarea
                        value={formData.description}
                        onChange={(event) => setFormData({ ...formData, description: event.target.value })}
                    />
                </div>
                <button type="submit">
                    Cadastrar
                </button>
                <button type="button" onClick={onCancel}>
                    Cancelar
                </button>
            </form>
        </div>
    );
}