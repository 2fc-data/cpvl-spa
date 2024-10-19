import { Link } from "react-router-dom";
import { FooterWrap } from "./Footer.styles";

export const Footer = () => {
  return (
    <FooterWrap className="footer-content">
      <div className="footer-block">Institucional

        <p>
          <Link to="/direction">Diretoria</Link>
        </p>

        <p>
          <Link to="/statute">Estatuto</Link>
        </p>
        
        <p>
          <Link to="/regiment">Regimento Interno</Link>
        </p>
        <p>
          <Link to="/about">Sobre</Link>
        </p> 

      </div>
      <div className="footer-block">Midias Sociais

      <p>
        <Link to="https://www.facebook.com/cpvlpocos/">Facebook</Link>
      </p>
      <p>
        <Link to="https://www.instagram.com/clubpocoscaldensedevoo_oficial/">Instagram</Link>
      </p>
      </div>
      <div className="footer-block">Rampa
        <p>
          <Link to="https://www.google.com/maps/@-21.7716455,-46.5746857,17z?entry=ttu">Mapa</Link>
        </p>

        <p>
          WP: -21.7715658,-46.5749861
        </p>

        <p>
          Altitude: 1550m
        </p>

        <p>
          Desnível: 400m
        </p>

        <p>
          Quadrante: S|NE|N|NW
        </p>
      </div>
      <div className="footer-block">Parceiros

        <p>
          <Link to="https://citur.com.br/">Citur</Link>
        </p>

        <p>
          <Link to="https://pocosdecaldas.mg.gov.br/">Prefeitora Poços de Caldas</Link>
        </p>
      </div>
    </FooterWrap>
  )
}