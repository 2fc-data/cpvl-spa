import { BlockContentWrap } from "../../styles/Global/default.ts"
import { AboutWrap } from "./About.styles.ts"

export const About = () => {
  return (
    <AboutWrap>
      <div className='home-content'>
        <div className="home-block">
          <BlockContentWrap className="home-block">
            Paulo Sérgio Trevisan, um garoto aventureiro, inteligente e
            ousado, natural da nossa querida Poços de Caldas, decidiu realizar
            seu sonho de voar. Sempre com muita admiração ele abservava e
            desfrutava da serra de são Domingos, a qual se localiza do lado
            norte da cidade, e um belo dia percebeu que ja tinha o local de
            decolagem, só faltava a asa.
          </BlockContentWrap>
        </div>
        <div className="home-block">
          <BlockContentWrap className="home-block">
            Em 12/12/1976 Paulo Sérgio Trevisan fez sua própria decolagem de
            Asa Delta na rampa Sul (quadrantes S e SE) da Serra de São
            Domingos local denominado hoje rampa do Arteninho, em homenagem ao
            nosso amigo de Artenio Z Filho. Do lado oposto, obviamente temos a
            rampa Norte denominada rampa do Baiano (quadrante N e NE) em
            homenagem ao nosso amigo Paulo S Trevisan.
          </BlockContentWrap>
        </div>
        <div className="home-block">
          <BlockContentWrap className="home-block">
          Em 1992 Luís Pasquale começou a voar de Parapente, em 1993 formou
              a primeira turma de pilotos de Parapente e em 1995 já com 20
              alunos, fundou o Clube Poçoscaldense de Vôo Livre - CPVL.
          </BlockContentWrap>
        </div>
        <div className="home-block">
          <BlockContentWrap className="home-block">
          Desde então tivemos vários Campeões Nacinais: Rafael Carvalho
              2002, Renato Marcel Lopes 2008, Serginho Henrique Sampaio 2010,
              Cristiano Ricci da Silva 2016, Marcella Uchoa e Gilmar de Jesus
              Couto em 2022.
          </BlockContentWrap>
        </div>
        <div className="home-block">
          <BlockContentWrap className="home-block">
          No início de 2023, o nosso espaço de decolagens, antes um lugar
              público, se tornou uma concessão da empresa CITUR, a qual trouxe
              inovações na infra-estrutura entre outras melhorias. Sempre fomos
              abençoados em ter um lugar tão especial e com uma vista
              privilegiada e agora com as melhorias realizadas pela CITUR,
              teremos uma das mais bonitas e melhor estruturada rampa do país.
          </BlockContentWrap>
        </div>
      </div>
    </AboutWrap>
  )
}
