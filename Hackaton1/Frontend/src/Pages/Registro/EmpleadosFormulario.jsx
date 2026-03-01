import React, { useState } from "react";
import '/src/Styles/EmpleadosFormulario.css';

const EmpleadosFormulario = () => {
  const [formData, setFormData] = useState({
    nombreCompleto: "",
    identificacion: "",
    fechaNacimiento: "",
    telefono: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Registro de Empleados</h2>

      <form className="empleado-form" onSubmit={handleSubmit}>
        {/* Nombre completo */}
        <div className="form-group">
          <label className="form-label">Nombre completo</label>
          <input
            type="text"
            name="nombreCompleto"
            className="form-input"
            value={formData.nombreCompleto}
            onChange={handleChange}
            required
          />
        </div>

        {/* Identificación */}
        <div className="form-group">
          <label className="form-label">
            Número de identificación (cédula / DNI / pasaporte)
          </label>
          <input
            type="text"
            name="identificacion"
            className="form-input"
            value={formData.identificacion}
            onChange={handleChange}
            required
          />
        </div>

        {/* Fecha de nacimiento */}
        <div className="form-group">
          <label className="form-label">Fecha de nacimiento</label>
          <input
            type="date"
            name="fechaNacimiento"
            className="form-input"
            value={formData.fechaNacimiento}
            onChange={handleChange}
            required
          />
        </div>

        {/* Teléfono */}
        <div className="form-group">
          <label className="form-label">Número de teléfono</label>
          <input
            type="tel"
            name="telefono"
            className="form-input"
            value={formData.telefono}
            onChange={handleChange}
            required
          />
        </div>

        {/* Correo electrónico */}
        <div className="form-group">
          <label className="form-label">Correo electrónico</label>
          <input
            type="email"
            name="email"
            className="form-input"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Botón */}
        <button type="submit" className="form-button">
          Registrar Empleado
        </button>
      </form>
    </div>
  );
};

export default EmpleadosFormulario;