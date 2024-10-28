import { media, theme } from "../../styles/Theme/theme"; 
import styled from "styled-components";
import image_about from "../../assets/Images/1alvorada.jpg";
import image_paulo_sergio from "../../assets/Images/baianoVoandoSul_pb.jpg"

export const AboutWrap = styled.div`

.about-content {    
    align-items: center;
    display: flex;
    flex-direction: column;    
    justify-content: center;
    width: auto;
  }

  .about-header {
    align-items: center;
    background-image: url(${image_about});
    background-size: cover;
    background-position: center;
    display: flex;    
    height: 30vh;
    justify-content: center;
    width: 100%;
  }

  .about-header-title{
    align-items: center;
    border: 2px solid ${theme.colors.white};
    color: ${theme.colors.white};     
    display: flex; 
    font-size: 18px;
    font-weight: 500;
    justify-content: center;
    padding: 6px 20px;
    text-transform: uppercase;
    width: auto;
  }

  .about-section{
    align-items: center;
    background-color: ${theme.colors.grayLight};
    display: flex;
    min-height: 10vh;
    justify-content: space-around;
    margin: 90px 0;
    width: 100%;

    ${media.lg`
      display: block;
    `}

    ${media.md`
      display: block;
    `}
  }

  .about-block {
    align-items: start;
    font-family: roboto, sans-serif;    
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 20px 0px;
    text-align: justify;
    width: 45%;

    ${media.lg`
      width: 100%;
    `}

    ${media.md`
      width: 100%;
    `}
  }

  .about-block-title {
    align-items: center;
    color: ${theme.colors.greenComplem};
    display: flex; 
    font-size: 3rem;
    font-weight: 500;    
    padding: 30px 20px 5px;
    width: auto; 

    ${media.lg`
      font-size: 2rem;
      width: 100%;
    `}

    ${media.md`
      font-size: 2rem;
      width: 100%;
    `}
  }
  
  .about-block-text{
    align-items: center;  
    background-color: ${theme.colors.grayLight};  
    font-size: .9rem;
    font-weight: 500;
    justify-content: center;
    line-height: 2;
    padding: 10px 25px;
    text-align: justify;
    width: auto;
  }

  .about-block-img {
    align-items: center;
    background-image: url(${image_paulo_sergio});
    background-position: center;
    background-size: cover;    
    display: flex;
    height: 30vh;
    justify-content: center;
    padding: 10px;
    width: 100%;

    ${media.lg`
      width: 100%;
    `}

    ${media.md`
      width: 100%;
    `}
  }

  .about-link {
    align-items: center;
    display: flex;
    background-color: ${theme.colors.greenComplem};
    border: 1px solid ${theme.colors.grayLight};
    border-radius: 5px;
    color: ${theme.colors.grayLight};
    justify-content: center;
    padding: 9px 9px ;
    width: 135px;

    &:hover {
      background-color: ${theme.colors.white};
      border: 1px solid ${theme.colors.greenComplem};
      border-radius: 3px;
      color: ${theme.colors.greenComplem};
      cursor: pointer;
    }
  }
`