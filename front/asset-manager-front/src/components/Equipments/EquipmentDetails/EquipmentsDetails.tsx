import type { Equipment } from "../../../types/Equipment";

interface EquipmentDetailsProps {
    equipment: Equipment;
    onClose: () => void;
}

export function EquipmentDetails({equipment, onClose}: EquipmentDetailsProps) {
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

    return(
        <div className="equipment-details">
            <h2>Detalhes do equipamento</h2>
            <p>
                <strong>Código:</strong> {equipment.assetCode}
            </p>
            <p>
                <strong>Nome:</strong> {equipment.name}
            </p>
            <p>
                <strong>Modelo:</strong>{equipment.model}
            </p>
            <p>
                <strong>Categoria:</strong> {equipment.category}
            </p>
            <p>
                <strong>Status:</strong> {getStatusLabel(equipment.status)}
            </p>
            <p>
                <strong>Descrição:</strong> {equipment.description}
            </p>
            <button onClick={onClose}>Fechar</button>
        </div>
    );
}