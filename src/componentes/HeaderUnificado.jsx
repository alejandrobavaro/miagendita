// Importaciones básicas de React y dependencias
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import "../assets/scss/_03-Componentes/_HeaderUnificado.scss";

// Componente principal del Header
function HeaderUnificado({ categories = [], onCategoryChange, searchQuery, setSearchQuery }) {
  // Hook para obtener la ruta actual del navegador
  const location = useLocation();
  
  // Estado para controlar la visibilidad del modal (actualmente desactivado)
  const [showCotizaciones, setShowCotizaciones] = useState(false);

  // Funciones para manejar el modal (mantenidas por si se necesitan luego)
  const handleCloseCotizaciones = () => setShowCotizaciones(false);
  const handleShowCotizaciones = () => setShowCotizaciones(true);

  // Función para determinar si una ruta está activa (resaltar enlace actual)
  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Contenedor principal del header */}
      <header className="header-unificado">
        <div className="contenedor-header">
          {/* Contenedor del logo */}
          <div className="logo-y-dolar">
            <div className="logo">
              <Link to="/">
                <img 
                  src="/img/02-logos/logomiagenditaa.png"  // Ruta del logo en blanco y negro
                  alt="Logo Mi Agendita" 
                  className="logo-img" 
                />
              </Link>
            </div>
          </div>

          {/* Navegación principal con enlaces */}
          <nav className="nav-links">
            <Link to="/" className={isActive("/") ? "activo" : ""}>Inicio</Link>
            <Link to="/calendario-pagos" className={isActive("/calendario-pagos") ? "activo" : ""}>Calendario</Link>
            <Link to="/contacto" className={isActive("/contacto") ? "activo" : ""}>Contacto</Link>
            <Link to="/ayuda" className={isActive("/ayuda") ? "activo" : ""}>Ayuda</Link>
          </nav>

          {/* Contenedor para acciones adicionales (actualmente vacío) */}
          <div className="acciones-header">
            {/* Espacio reservado para futuros botones o acciones */}
          </div>
        </div>
      </header>


    </>
  );
}

export default HeaderUnificado;