// import { Link } from "react-router-dom"
import { StatuteWrap } from "./Statute.styles"
import { BlockContentWrap } from "../../styles/Global/default"
import pdf from "/src/assets/Docs/Estatuto2016.pdf";

export const Statute = () => {

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
    <StatuteWrap className='statute-content'>
      <BlockContentWrap className="statute-header">
        <div className="statute-title">Estatuto</div>
      </BlockContentWrap>

      <BlockContentWrap className="statute-text">
        <h3>Estatuto</h3>
        <div className="paragraph">
          Na Assemblpeia Geral Extraordinária (AGE) de 20 de novembro de
          2023, foram definidos os tópicos, anteriormente debatidos na AGE
          de 21/09/2023, e assim o Clube Poçoscaldense de Vôo Livre - CPVL
          tem um novo Estatuto aprovado na gestão 2022/2023 e então
          registrado no cartório em 21 de novembro de 2023.

          O CPVL agradece a todos que contribuíram para a atualização do
          estatuto e reforça que a participação dos associados nas
          assembléias é de extrema importância, pois entende que todos tem
          algo a contribuir com o clube.
        </div>
      </BlockContentWrap>

      <BlockContentWrap className="statute-text">
        {PDFViewer()}
      </BlockContentWrap>
    </StatuteWrap>
  )
}
