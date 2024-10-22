import { media, theme } from "../../styles/Theme/theme"; 
import styled from "styled-components";
import image_airspace from "../../assets/Images/r_norte1.jpg";

export const AirspaceWrap = styled.div`

  .airspace-content {
    align-items: center;
    display: flex-wrap;
    height: 88vh;
    justify-content: center;
    width: auto;
  }

  .airspace-header {
    align-items: center;
    background-image: url(${image_airspace});
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    height: 30vh;
  }

  .airspace-block {
    align-items: start;
    font-family: roboto, sans-serif;    
    display: flex;
    justify-content: space-around;
    height: auto;
    margin: 50px 0px;
    text-align: justify;

    ${media.md`
      display: block;
    `}
  }
  
  .airspace-title{
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

  .airspace-block-img {
    align-items: center;
    background-size: cover;
    background-position: center;
    display: flex;
    height: 30vh;
    justify-content: center;
    width: 30vw;

    ${media.md`
      width: 100%;
    `}
  }

  .airspace-text{
    align-items: center;    
    font-size: 14px;
    font-weight: 500;
    justify-content: center;
    max-width: 600px;
    line-height: 2;
    padding: 12px 20px;

    ${media.md`
      max-width: 100%;
    `}
  }
`