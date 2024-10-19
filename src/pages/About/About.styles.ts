import { media, theme } from "../../styles/Theme/theme"; 
import styled from "styled-components";
import image_about from "../../assets/Images/1alvorada.jpg";
import image_paulo_sergio from "../../assets/Images/baianoVoandoSul_pb.jpg"

export const AboutWrap = styled.div`

  .about-content {
    align-items: center;
    display: flex-wrap;
    height: 88vh;
    justify-content: center;
    width: auto;
  }

  .about-header {
    align-items: center;
    background-image: url(${image_about});
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    height: 30vh;
  }

  .about-title{
    align-items: center;
    border: 2px solid ${theme.colors.white};
    color: ${theme.colors.white};     
    display: flex; 
    font-size: 18px;
    font-weight: 700;
    justify-content: center;
    margin-top: -1em;
    padding: 12px 20px;
    text-transform: uppercase;
    width: auto;
  }

  .about-block-img {
    align-items: center;
    background-image: url(${image_paulo_sergio});
    background-size: cover;
    background-position: center;
    display: flex;
    height: 30vh;
    justify-content: center;
    width: 100%;
  }

  .about-block {
    align-items: start;
    display: flex;
    justify-content: space-around;
    margin: 20px 0px;
    min-width: 500px;
    text-align: justify;

    ${media.md`
      display: block;
    `}
  }

  .about-text{
    align-items: center;    
    font-size: 14px;
    font-weight: 500;
    justify-content: center;
    max-width: 600px;
    line-height: 2;
    padding: 12px 20px;
    max-width: 50%;

    ${media.md`
      max-width: 100%;
    `}
  }

`