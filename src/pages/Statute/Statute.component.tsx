import { Link } from "react-router-dom"
import { StatuteWrap } from "./Statute.styles"

export const Statute = () => {
  return (
    <StatuteWrap>
      <h3>Statute</h3>
      
      <div>
        Na Assemblpeia Geral Extraordinária (AGE) de 20 de novembro de
        2023, foram definidos os tópicos, anteriormente debatidos na AGE
        de 21/09/2023, e assim o Clube Poçoscaldense de Vôo Livre - CPVL
        tem um novo Estatuto aprovado na gestão 2022/2023 e então
        registrado no cartório em 21 de novembro de 2023.
      </div>

      <div>
        O CPVL agradece a todos que contribuíram para a atualização do
        estatuto e reforça que a participação dos associados nas
        assembléias é de extrema importância, pois entende que todos tem
        algo a contribuir com o clube.
      </div>

      <div>
        <Link to="https://drive.google.com/file/d/1-NGbscVQfUzuKIHe4s15x_qrFymgVEf_/view?usp=drive_link">
          Baixar o estatuto
        </Link>
      </div>
    </StatuteWrap>
  )
}
