
import type { Brand } from "../../../types/Brand";

interface BrandTableProps {
    brands: Brand[];
    onEditBrand: (brand: Brand) => void;
    onDeleteBrand: (brand: Brand) => void;
}

export function BrandTable({ brands, onEditBrand, onDeleteBrand}: BrandTableProps) {
    return (
        <div>
            <table className="brands-table">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Ações</th>
                    </tr>
                </thead>

                <tbody>
                    {brands.map(brand => (
                        <tr key={brand.id}>
                            <td>{brand.name}</td>
                            <td>
                                <button onClick={() => onEditBrand(brand)}>
                                    Editar
                                </button>

                                <button onClick={() => onDeleteBrand(brand)}>
                                    Excluir
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
