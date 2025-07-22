// Importaciones básicas de React y dependencias
import React from "react";
import { Link } from "react-router-dom";
import FooterGondraWorldDev from './FooterGondraWorldDev';
import { FiHelpCircle } from "react-icons/fi";
import "../assets/scss/_03-Componentes/_Footer.scss";

// Componente principal del Footer
function Footer() {
  return (
    <footer className="footer-container">
      {/* Contenedor principal del footer */}
      <div className="footer-content">
        
        {/* Sección de columnas (logo - redes - logo) */}
        <div className="footer-columns">
          
          {/* Columna izquierda (logo) */}
          <div className="footer-column">
            <Link to="/" className="footer-logo-link">
              <img
                className="footer-logo"
                src="/img/02-logos/logomiagendita1a.png" // Logo en blanco y negro
                alt="Logo Mi Agendita"
              />
            </Link>
          </div>
          
          {/* Columna central (redes sociales y ayuda) */}
          <div className="footer-column">
            <div className="social-links">
              {/* Enlaces a redes sociales */}
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <i className="bi bi-instagram" /> Instagram
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <i className="bi bi-youtube" /> YouTube
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <i className="bi bi-facebook" /> Facebook
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <i className="bi bi-twitter" /> Twitter
              </a>
              
              {/* Enlace a ayuda */}
              <Link to="/ayuda" className="social-link help-link">
                <FiHelpCircle className="me-2" />
                Ayuda
              </Link>
            </div>
          </div>
          
          {/* Columna derecha (logo - eliminada para simplificar) */}
          {/* <div className="footer-column">
            <Link to="/" className="footer-logo-link">
              <img
                className="footer-logo"
                src="/img/02-logos/logomiagendita1a.png"
                alt="Logo Mi Agendita"
              />
            </Link>
          </div> */}
        </div>
        
        {/* Divisor visual */}
        <div className="footer-divider"></div>
        
        {/* Sección de copyright */}
        <div className="footer-copyright">
          <FooterGondraWorldDev />
        </div>
      </div>
    </footer>
  );
}

export default Footer;