import React from "react";
import "../assets/scss/_03-Componentes/_FooterGondraWorldDev.scss";

function FooterGondraWorldDev() {
  return (
    <div className="trademarkGondraFooter">
      {/* Línea divisoria con efecto */}
      <div className="divider-animated"></div>
      
      <div className="textoFooterAutor">
        {/* Enlace principal con animación */}
        <a
          href="https://alejandrobavaro.github.io/gondraworld-dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          {/* Texto principal con animación */}
          <h3 className="texto-principal">
            <span className="text-animation">Soña tu Web</span>
            <i className="bi bi-check-circle icon-animation"></i>
            
            <strong>
              <span className="texto-secundario text-animation-delay">
                Nosotros la desarrollamos
                <i className="bi bi-check-circle icon-animation-delay"></i>
              </span>
            </strong>
          </h3>
          
          {/* Texto de marca con efecto brillante */}
          <div className="textoFooterGondraWorld shine-effect">
            <i className="bi bi-brilliance" />- Gondra World Dev -
            <i className="bi bi-brilliance" />
          </div>
        </a>
      </div>
    </div>
  );
}

export default FooterGondraWorldDev;