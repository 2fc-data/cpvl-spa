import { BlockContentWrap } from "../../styles/Global/default"
import { DirectionWrap } from "./Direction.styles"


export const Direction = () => {
  return (
    <DirectionWrap className="direction-content">
      <BlockContentWrap className="direction-header">
        <div className="direction-title">Diretoria</div>
      </BlockContentWrap>

      <div className="direction-block">        
        <div>
          2024 / 2025
        </div>
        <div>
          Presidente: Gilberto Raposo
          Vice Presidente: Rodrigo Mindú
          Tesoureiro: Cláudio Lellis
          Diretor Técnico: Gustavo Borges
          Diretor Social: Gustavo Garcia
        </div>
      </div>

      <div className="direction-block">
        <div>
          2021 / 2023
        </div>
        <div>
          Presidente: Cristiano Ricci
          Vice Presidente: Juliano de Vito
          Tesoureiro: Fernando C. Filho
          Diretor Técnico: Walter Moraes
          Diretor Social: Leonardo Santos
        </div>
      </div>

      <div className="direction-block">
        <div>
          2022 / 2020
        </div>
        <div>
          Presidente: Renan Braz
          Vice Presidente: Rinaldo Marcondes
          Tesoureiro: Ricardo Galo
          Diretor Técnico: Cristiano Ricci
          Diretor Social: Walter Moraes
        </div>
      </div>
    </DirectionWrap>
  )
}
