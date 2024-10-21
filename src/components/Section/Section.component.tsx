import { SectionWrap } from "./Section.styles";

export const Section = () => {
  return (
    <SectionWrap>
      <div className="section-content">
        <h3>Espaço Aéreo</h3>
        <div>
          Desde 1986, o Código Brasileiro de Aeronáutica estabelece que o aerodesporto deverá ser praticado em áreas determinadas pela autoridade aeronáutica.
        </div>
        <div>
          saiba mais
        </div>
      </div>

      <div className="section-content">
        <h3>Regimento Interno</h3>
        <div>
          Na assemblpeia Geral Extraordinária (AGE) de setembro de 2024, foram debatido novos tópicos importantes para atualização do novo Regimento Interno. 
        </div>
        <div>
          saiba mais
        </div>
      </div>

      <div className="section-content">
        <h3>Estatuto</h3>

        <div>
          O Clube Poçoscaldense de Vôo Livre - CPVL tem um novo Estatuto aprovado na gestão 2024/2025
        </div>

        <div>
          saiba mais
        </div>
      </div>
    </SectionWrap>
  )
}
