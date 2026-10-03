import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export function Sidebar(){
    return(
        <aside>
            <h2>Sidebar</h2>
            <nav>
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? "active" : ""}
                >
                    Dashboard
                </NavLink>

                <NavLink
                    to="/equipments"
                    className={({ isActive }) => isActive ? "active" : ""}
                >
                    Equipamentos
                </NavLink>

                <NavLink
                    to="/brands"
                    className={({ isActive }) => isActive ? "active" : ""}
                >
                    Marcas
                </NavLink>

                <NavLink
                    to="/categories"
                    className={({ isActive }) => isActive ? "active" : ""}
                >
                    Categorias
                </NavLink>
            </nav>
        </aside>
    )
}
