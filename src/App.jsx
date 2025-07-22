// Importaciones básicas de React y React Router
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Importación de estilos globales
import "bootstrap/dist/css/bootstrap.min.css"; // Framework Bootstrap
import "bootstrap-icons/font/bootstrap-icons.css"; // Iconos Bootstrap
import "./assets/scss/_01-General/_App.scss"; // Estilos SCSS personalizados

// Importación de componentes (ATENCIÓN: Verificar que las rutas coincidan con tu estructura de archivos)
import HeaderUnificado from "./componentes/HeaderUnificado"; // Componente de encabezado existente
import MainCalendarioPagos from "./componentes/MainCalendarioPagos"; // Componente principal de calendario
import ContactoLogoRedes from "./componentes/ContactoLogoRedes"; // Componente de contacto (parte 1)
import ContactoFormularioSlider from "./componentes/ContactoFormularioSlider"; // Componente de contacto (parte 2)
import ConsultasAyuda from "./componentes/ConsultasAyuda"; // Componente de ayuda/FAQ
import Footer from "./componentes/Footer"; // Componente de pie de página
import MainWhatsappIcon from "./componentes/MainWhatsappIcon"; // Componente de botón WhatsApp
import MainPublicidadSlider from "./componentes/MainPublicidadSlider"; // Componente de publicidad (slider)

// Componente principal de la aplicación
function App() {
  // Estados para manejar búsqueda y categorías seleccionadas
  const [searchQuery, setSearchQuery] = React.useState(''); // Estado para texto de búsqueda
  const [selectedCategory, setSelectedCategory] = React.useState(''); // Estado para categoría seleccionada

  // Manejador para cambio de categoría
  const handleCategoryChange = (category) => {
    setSelectedCategory(category); // Actualiza la categoría seleccionada
  };

  // Renderizado de la aplicación
  return (
    <Router>
      {/* Encabezado con propiedades:
           - categories: Lista de categorías a mostrar
           - onCategoryChange: Función para manejar cambio de categoría
           - searchQuery/setSearchQuery: Para manejar búsquedas */}
      <HeaderUnificado 
        categories={['Servicios', 'Impuestos', 'Alquileres']} 
        onCategoryChange={handleCategoryChange}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Línea divisoria sutil */}
      <hr className="border border-0 opacity-20" />

      {/* Contenedor principal del contenido */}
      <div className="main-content">
        <div className="content">
          {/* Sistema de rutas:
               - / y /calendario-pagos muestran el calendario principal
               - /contacto muestra componentes de contacto
               - /ayuda muestra componente de ayuda */}
          <Routes>
            <Route path="/" element={<MainCalendarioPagos />} />
            <Route path="/calendario-pagos" element={<MainCalendarioPagos />} />
            <Route
              path="/contacto"
              element={
                <>
                  <ContactoLogoRedes />
                  <ContactoFormularioSlider />
                </>
              }
            />
            <Route path="/ayuda" element={<ConsultasAyuda />} />
          </Routes>
        </div>
      </div>

      {/* Línea divisoria sutil */}
      <hr className="border border-0 opacity-20" />
      
      {/* Componentes adicionales:
           - Slider de publicidad
           - Pie de página
           - Botón flotante de WhatsApp */}
      <MainPublicidadSlider />
      <Footer />
      <MainWhatsappIcon />
    </Router>
  );
}

export default App;