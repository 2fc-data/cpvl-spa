import { media, theme } from "../../styles/Theme/theme";
import styled from "styled-components";
import image_airspace from "../../assets/Images/3condicao.jpg";

export const AirspaceWrap = styled.div`

  .airspace-content {
    align-items: center;
    display: flex;
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
    font-weight: 500;
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
    width: 50vw;

    ${media.md`
      width: 100%;
    `}
  }

  .airspace-text{
    align-items: center;    
    font-size: 14px;
    font-weight: 500;
    justify-content: center;
    line-height: 2;
    margin: 10px 0px;
    padding: 10px 0px;
    text-align: justify;
    width: auto;

    .paragraph {
      padding: 10px 60px;

      ${media.lg`
        padding: 10px 60px;
      `}

      ${media.md`
        padding: 10px 60px;
      `}
    }

    ${media.lg`
      max-width: 100%;
      padding: 20px 0px;
    `}

    ${media.md`
      max-width: 100%;
      padding: 20px 0px;
    `}
  }


  .airspace-link {
    align-items: center;
    display: flex;
    background-color: ${theme.colors.greenComplem};
    border: 1px solid ${theme.colors.white};
    border-radius: 5px;
    color: ${theme.colors.white};
    justify-content: center;
    margin-top: 15px;
    padding: 2px 5px ;
    width: 130px;

    &:hover {
      background-color: ${theme.colors.white};
      border: 1px solid ${theme.colors.greenComplem};
      border-radius: 3px;
      color: ${theme.colors.greenComplem};
      cursor: pointer;
    }
  }
`