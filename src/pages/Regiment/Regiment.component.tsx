
import { RegimentWrap } from "./Regiment.styles"
import { BlockContentWrap } from "../../styles/Global/default"
import pdf from "/src/assets/Docs/RI.pdf";

export const Regiment = () => {

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

    <RegimentWrap className='regiment-content'>
      <BlockContentWrap className="regiment-header">
        <div className="regiment-title">Regimento Interno</div>
      </BlockContentWrap>

      <BlockContentWrap className="regiment-text">
        <h3>Regimento Interno</h3>
        <div>
          Na Assemblpeia Geral Extraordinária (AGE) de 21 de setembro de
          2023, foram debatido novos tópicos importantes para atualização do
          novo Regimento Interno (RI) do Clube Poçoscaldense de Vôo Livre -
          CPVL.

          O CPVL agradece a todos que contribuíram para a atualização do
          estatuto e reforça que a participação dos associados nas
          assembléias é de extrema importância, pois entende que todos tem
          algo a contribuir com o clube.
        </div>
      </BlockContentWrap>

      <div className="regiment-text">
        {PDFViewer()}
      </div>
    </RegimentWrap>
  )
}
