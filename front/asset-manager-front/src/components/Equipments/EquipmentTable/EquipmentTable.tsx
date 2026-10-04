import type { Equipment } from "../../../types/Equipment";

interface EquipmentTableProps {
    equipments: Equipment[];
    onSelectEquipment: (equipment: Equipment) => void;
    onEditEquipment: (equipment: Equipment) => void;
}

export function EquipmentTable({ equipments, onSelectEquipment, onEditEquipment} : EquipmentTableProps) {
    const getStatusLabel = (status: Equipment["status"]) => {
        switch (status) {
            case "AVAILABLE":
                return "Disponivel";
            case "IN_USE":
                return "Em uso";
            case "MAINTENANCE":
                return "Em manutenção";
            case "DISPOSED":
                return "Descartado";
        }
    };


    return (
        <div>
            <table className="equipments-table">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Código</th>
                        <th>Modelo</th>
                        <th>Marca</th>
                        <th>Categoria</th>
                        <th>Status</th>
                        <th>Ações</th>
                    </tr>
                </thead>

                <tbody>
                    {equipments.map(equipment => (
                        <tr key={equipment.id}>
                            <td>{equipment.name}</td>
                            <td>{equipment.assetCode}</td>
                            <td>{equipment.model}</td>
                            <td>{equipment.brand}</td>
                            <td>{equipment.category}</td>
                            <td>
                                <span className={`status-badge status-${equipment.status.toLowerCase()}`}>
                                    {getStatusLabel(equipment.status)}
                                </span>
                            </td>
                            <td>
                                <button onClick={() => onSelectEquipment(equipment)}>
                                    Ver Detalhes
                                </button>
                                <button onClick={() => onEditEquipment(equipment)}>
                                    Editar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {}
        </div>
    );
}