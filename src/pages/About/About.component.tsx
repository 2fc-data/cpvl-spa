import { BlockContentWrap } from "../../styles/Global/default.ts"
import { AboutWrap } from "./About.styles.ts"

export const About = () => {
  return (
    <AboutWrap className='about-content'>
        <BlockContentWrap className="about-header">
          <div className="about-title">Nossa história</div>
        </BlockContentWrap>

        <div className="about-block">
          <BlockContentWrap className="about-text">
            <span>Paulo Sérgio Trevisan,</span>
            <p>em 1976, um garoto aventureiro, inteligente e
            ousado, natural da nossa querida Poços de Caldas, decidiu realizar
            seu sonho de voar. Sempre com muita admiração ele abservava e
            desfrutava da serra de são Domingos, a qual se localiza do lado
            norte da cidade, e um belo dia percebeu que ja tinha o local de
            decolagem, só faltava a asa.</p><br />

            <p>Em 12/12/1976 Paulo Sérgio Trevisan fez sua própria decolagem de
            Asa Delta na rampa Sul (quadrantes S e SE) da Serra de São
            Domingos local denominado hoje rampa do Arteninho, em homenagem ao
            piloto Artenio Z. Filho. Do lado oposto, obviamente temos a
            rampa Norte denominada rampa do Baiano (quadrante N e NE) em
            homenagem ao nosso amigo Paulo S Trevisan.</p>
          </BlockContentWrap>

          <BlockContentWrap className="about-block-img">
          </BlockContentWrap>
        </div>

        <div className="about-block">
          <BlockContentWrap className="about-text">
            Em 1992 Luís Pasquale começou a voar de Parapente, em 1993 formou
            a primeira turma de pilotos de Parapente e em 1995 já com 20
            alunos, fundou o Clube Poçoscaldense de Vôo Livre - CPVL.
          </BlockContentWrap>

          <BlockContentWrap className="about-text">
            Desde então tivemos vários Campeões Nacinais: Rafael Carvalho
            2002, Renato Marcel Lopes 2008, Serginho Henrique Sampaio 2010,
            Cristiano Ricci da Silva 2016, Marcella Uchoa e Gilmar de Jesus
            Couto em 2022.
          </BlockContentWrap>

          <BlockContentWrap className="about-text">
            No início de 2023, o nosso espaço de decolagens, antes um lugar
            público, se tornou uma concessão da empresa CITUR, a qual trouxe
            inovações e melhoriasna infra-estrutura da rampa norte.
          </BlockContentWrap>
        </div>
    </AboutWrap>
  )
}
