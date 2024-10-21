import { Link } from "react-router-dom"
import { RegimentWrap } from "./Regiment.styles"

export const Regiment = () => {
  return (
    <RegimentWrap>
      <h3>REgimento Interno</h3>
      <div>
        Na Assemblpeia Geral Extraordinária (AGE) de 21 de setembro de
        2023, foram debatido novos tópicos importantes para atualização do
        novo Regimento Interno (RI) do Clube Poçoscaldense de Vôo Livre -
        CPVL.
      </div>

      <div>
        O CPVL agradece a todos que contribuíram para a atualização do
        estatuto e reforça que a participação dos associados nas
        assembléias é de extrema importância, pois entende que todos tem
        algo a contribuir com o clube.
      </div>

      <div>
      <Link to="">Baixar o regimento interno</Link>
      </div>
    </RegimentWrap>
  )
}
