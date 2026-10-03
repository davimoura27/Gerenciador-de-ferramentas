import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Equipments } from "./pages/Equipments/Equipments";
import { Brands } from "./pages/Brands/Brands";
import { Categories } from "./pages/Categories/Categories";
import { Layout } from "./components/Layout/Layout";


export function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/equipments" element={<Equipments/>} />
          <Route path="/brands" element={<Brands/>} />
          <Route path="/categories" element={<Categories/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

