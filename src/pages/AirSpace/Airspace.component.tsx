import { AirspaceWrap } from "./Airspace.styles"
import { BlockContentWrap } from "../../styles/Global/default"
import { Link } from "react-router-dom"
import pdf from "/src/assets/Docs/EspacoAereo.pdf"

export const Airspace = () => {
  const PDFViewer = () => {

    return (
      <div>
        <iframe
          src={pdf}
          style={{ width: "100%", height: "600px" }}
        />
      </div>
    )
  };

  return (
    <AirspaceWrap className='airspace-content'>
      <BlockContentWrap className="airspace-header">
        <div className="airspace-title">Espaço aéreo</div>
      </BlockContentWrap>

        <BlockContentWrap className="airspace-text">
          <h3>Espaço Aéreo</h3>
          <div>
            Desde 1986, o Código Brasileiro de Aeronáutica estabelece que o
            aerodesporto deverá ser praticado em áreas determinadas pela
            autoridade aeronáutica. É por isso que a prática só é regular
            quando realizada dentro do Espaço Aéreo Condicionado (EAC), em
            áreas geralmente estabelecidas por SBR´s ou NOTAM destinadas ao
            aerodesporto e disponíveis no site do Departamento de Controle de
            Espaço Aéreo (DECEA)
          </div>

          <BlockContentWrap className="airspace-link">
            <Link to="https://www.decea.mil.br/?i=unidades&p=cindacta-i">DECEA Cindacta I</Link>
          </BlockContentWrap>
        </BlockContentWrap>

        <BlockContentWrap className="airspace-text">
          {PDFViewer()}
        </BlockContentWrap>

    </AirspaceWrap>
  )
}