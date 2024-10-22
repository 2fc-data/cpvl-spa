import { media, theme } from "../../styles/Theme/theme"; 
import styled from "styled-components";
import image_statute from "../../assets/Images/5crepusculo.jpg";
import DocStatute from "../../assets/Docs/Estatuto2016.pdf"

export const StatuteWrap = styled.div`

  .statute-content {
    align-items: center;
    display: flex;
    height: 88vh;
    justify-content: center;
    width: auto;
  }

  .statute-header {
    align-items: center;
    background-image: url(${image_statute});
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    height: 30vh;
  }

  .statute-block {
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
  
  .statute-title{
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

  .statute-block-img {
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

  .statute-text{
    align-items: center;    
    font-size: 14px;
    font-weight: 500;
    justify-content: center;
    max-width: 600px;
    line-height: 2;
    padding: 12px 20px;

    ${media.md`
      max-width: 100%;
      padding: 20px 12px;
    `}
  }

  .statute-document{
    align-items: center;
    background-size: cover;
    background-image: url(${DocStatute});
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    font-weight: 500;
    height: 45vh;
    justify-content: center;
    margin: 20px 0px;
    overflow: scroll;
    width: 600px;

    ${media.md`
      max-width: 100%;
      margin: 50px 5px;
    `}
  }
`