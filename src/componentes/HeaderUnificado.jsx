// Importaciones básicas de React y dependencias
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import "../assets/scss/_03-Componentes/_HeaderUnificado.scss";

// Componente principal del Header
function HeaderUnificado({ categories = [], onCategoryChange, searchQuery, setSearchQuery }) {
  // Estados y hooks
  const location = useLocation(); // Hook para obtener la ruta actual
  const [showCotizaciones, setShowCotizaciones] = useState(false); // Estado para modal de cotizaciones

  // Manejadores para el modal
  const handleCloseCotizaciones = () => setShowCotizaciones(false);
  const handleShowCotizaciones = () => setShowCotizaciones(true);

  // Función para determinar si una ruta está activa
  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Header principal */}
      <header className="header-unificado">
        <div className="contenedor-header">
          {/* Sección de logo */}
          <div className="logo-y-dolar">
            <div className="logo">
              <Link to="/">
                <img 
                  src="/img/02-logos/logomiagendita1a.png"  // Ruta actualizada del logo
                  alt="Logo Mi Agendita" 
                  className="logo-img" 
                />
              </Link>
            </div>
          </div>

          {/* Navegación principal */}
          <nav className="nav-links">
            <Link to="/" className={isActive("/") ? "activo" : ""}>Inicio</Link>
            <Link to="/calendario-pagos" className={isActive("/calendario-pagos") ? "activo" : ""}>Calendario</Link>
            <Link to="/contacto" className={isActive("/contacto") ? "activo" : ""}>Contacto</Link>
            <Link to="/ayuda" className={isActive("/ayuda") ? "activo" : ""}>Ayuda</Link>
          </nav>

          {/* Acciones del header */}
          <div className="acciones-header">
            {/* Botón para mostrar modal de cotizaciones (opcional) */}
            {/* <Button variant="outline-primary" onClick={handleShowCotizaciones}>
              <i className="bi bi-currency-dollar"></i>
            </Button> */}
          </div>
        </div>
      </header>

      {/* Modal de cotizaciones (opcional - comentado) */}
      {/* <Modal show={showCotizaciones} onHide={handleCloseCotizaciones} centered>
        <Modal.Header closeButton>
          <Modal.Title>Cotizaciones del Dólar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Contenido de cotizaciones aquí
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCotizaciones}>Cerrar</Button>
        </Modal.Footer>
      </Modal> */}
    </>
  );
}

export default HeaderUnificado;