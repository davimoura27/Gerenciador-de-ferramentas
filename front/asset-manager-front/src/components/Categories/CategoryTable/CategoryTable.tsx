import type { Category } from "../../../types/Category";

interface CategoryTableProps{
    categories: Category[];
    onEditCategory: (category: Category) => void;
    onDeleteCategory: (category: Category) => void;
}

export function CategoryTable({categories, onEditCategory, onDeleteCategory}: CategoryTableProps){
    return (
        <div>
            <table className="categories-table">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map(category => (
                        <tr key={category.id}>
                            <td>{category.name}</td>
                            <td>
                                <button onClick={() => onEditCategory(category)}>Editar</button>
                                <button onClick={() => onDeleteCategory(category)}>Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}