import { media, theme } from "../../styles/Theme/theme";
import styled from "styled-components";
import image_airspace from "../../assets/Images/5crepusculo.jpg";

export const StatuteWrap = styled.div`

  .statute-content {    
    align-items: center;
    display: flex;
    flex-direction: column;    
    justify-content: center;
    width: auto;
  }

  .statute-header {
    align-items: center;
    background-image: url(${image_airspace});
    background-size: cover;
    background-position: center;
    display: flex;    
    height: 30vh;
    justify-content: center;
    width: 100%;
  }

  .statute-header-title{
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

  .statute-section{
    background-color: ${theme.colors.grayLight};
    display: flex;
    min-height: 10vh;
    justify-content: space-around;
    margin: 90px 0;
    width: 100%;

    ${media.lg`
      display: block;
      margin: 30px 0;
    `} 

    ${media.md`
      display: block;
      margin: 30px 0;
    `}
  }

  .statute-block {
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

  .statute-block-btn {   
    align-items: end;  
    display: flex;    
    margin: 20px 0px;
    padding: 25px;
    width: 49%;
  }

  .statute-block-title {
    align-items: center;
    color: ${theme.colors.greenComplem};
    display: flex; 
    font-size: 3rem;
    font-weight: 500;      
    margin-top: -1em;
    padding: 30px 20px 5px;
    width: auto; 
  }
  
  .statute-block-text{
    align-items: center;  
    background-color: ${theme.colors.grayLight};  
    font-size: 14px;
    font-weight: 500;
    justify-content: center;
    line-height: 2;
    padding: 10px 25px;
    text-align: justify;
    width: auto;
  }
  
  .statute-block-paragraph {
    padding: 10px 60px;

    ${media.lg`
      padding: 10px 60px;
    `}

    ${media.md`
      padding: 10px 60px;
    `}
  }

  .statute-link {
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