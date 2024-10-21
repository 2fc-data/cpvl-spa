import { Link } from "react-router-dom"
import { AirspaceWrap } from "./Airspace.styles"


export const Airspace = () => {
  return (
    <AirspaceWrap>
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

      <div>
        <Link to="">Espaço Aéreo</Link>
      </div>
    </AirspaceWrap>
  )
}
