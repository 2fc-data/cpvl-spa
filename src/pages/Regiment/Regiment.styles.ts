import { media, theme } from "../../styles/Theme/theme";
import styled from "styled-components";
import image_regiment from "../../assets/Images/2rampa.jpg";

export const RegimentWrap = styled.div`

  .regiment-content {
    align-items: center;
    display: flex;
    height: 88vh;
    justify-content: center;
    width: auto;
  }

  .regiment-header {
    align-items: center;
    background-image: url(${image_regiment});
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    height: 30vh;
  }

  .regiment-block {
    align-items: start;
    font-family: roboto, sans-serif;    
    display: flex;
    justify-content: space-around;
    height: auto;
    margin: 50px 0px;
    text-align: justify;
    padding: 5px;
    width: 90vw;

    ${media.md`
      display: block;
    `}
  }
  
  .regiment-title{
    align-items: center;
    border: 2px solid ${theme.colors.white};
    color: ${theme.colors.white};     
    display: flex; 
    font-size: 18px;
    font-weight: 500;
    justify-content: center;
    margin-top: -1em;
    padding: 12px 20px;
    text-transform: uppercase;
    width: auto;
  }

  .regiment-block-img {
    align-items: center;
    background-size: cover;
    background-position: center;
    display: flex;
    height: 30vh;
    justify-content: center;
    width: 50vw;

    ${media.md`
      width: 100%;
    `}
  }

  .regiment-text{
    align-items: center;    
    font-size: 14px;
    font-weight: 500;
    justify-content: center;
    line-height: 2;
    margin: 10px 0px;
    padding: 10px 0px;
    text-align: justify;
    width: auto;

    ${media.lg`
      max-width: 100%;
      padding: 20px 0px;
    `}

    ${media.md`
      max-width: 100%;
      padding: 20px 0px;
    `}
  }

  .paragraph {
    padding: 10px 60px;

    ${media.lg`
      padding: 10px 60px;
    `}

    ${media.md`
      padding: 10px 60px;
    `}
  }
`