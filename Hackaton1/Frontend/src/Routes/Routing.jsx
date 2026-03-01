import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmpleadosFormulario from "../Pages/Registro/EmpleadosFormulario.jsx";

function Routing() {
    return (
        <Router>
            <Routes>
            
                <Route path="/EmpleadosFormulario" element={<EmpleadosFormulario />} />
               
            </Routes>
        </Router>
    );
}

export default Routing;
