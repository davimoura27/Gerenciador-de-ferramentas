import { Outlet } from 'react-router-dom';
import { Sidebar } from '../Sidebar/Sidebar';
import { Header } from '../Header/Header';
import './Layout.css';

export function Layout(){
    return(
        <div className="layout">
            <Sidebar/>
            <main>
                <Header/>
                <div className="content">
                    <Outlet/>

                </div>
            </main>
        </div>
    )
}