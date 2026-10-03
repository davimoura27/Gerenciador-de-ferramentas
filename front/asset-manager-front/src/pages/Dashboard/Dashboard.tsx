import './Dashboard.css';
import { api } from '../../api/api';
import { useEffect, useState } from 'react';
import type { Equipment } from "../../types/Equipment";

export function Dashboard(){
    const[equipments, setEquipments] = useState<Equipment[]>([]);
    const[error, setError] = useState([]);

    useEffect(() => {
        api.get("/equipments").then(response => {setEquipments(response.data), console.log(response.data)})
            .catch(error => {setError(error)})
        
    },[]);

    return(
        <div className="dashboard">
            <div className="dashboard-header">
                <h1>Dashboard</h1>
                <p>Visão geral dos equipamentos</p>
            </div>

            <div className="dashboard-cards">
                <div className="dashboard-card">
                    <span>Total de equipamentos</span>
                    <strong>{equipments.length}</strong>
                </div>

                <div className="dashboard-card">
                    <span>Disponiveis</span>
                    <strong>{equipments.filter(equipment => equipment.status === "AVAILABLE").length}</strong>
                </div>

                <div className="dashboard-card">
                    <span>Em uso</span>
                    <strong>{equipments.filter(equipment => equipment.status === "IN_USE").length}</strong>
                </div>

                <div className="dashboard-card">
                    <span>Em manutenção</span>
                    <strong>{equipments.filter(equipment => equipment.status === "MAINTENANCE").length}</strong>
                </div>

                <div className="dashboard-card">
                    <span>Descartados</span>
                    <strong>{equipments.filter(equipment => equipment.status === "DISPOSED").length}</strong>
                </div>
            </div>
        </div>
    )
}
