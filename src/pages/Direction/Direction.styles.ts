import { media, theme } from "../../styles/Theme/theme";
import styled from "styled-components";
import image_direction from "../../assets/Images/3condicao.jpg";

export const DirectionWrap = styled.div`

.direction-content {    
    align-items: center;
    display: flex;
    flex-direction: column;    
    justify-content: center;
    width: auto;
  }

  .direction-header {
    align-items: center;
    background-image: url(${image_direction});
    background-size: cover;
    background-position: center;
    display: flex;    
    height: 30vh;
    justify-content: center;
    width: 100%;
  }

  .direction-header-title{
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

  .direction-section{
    align-items: center;    
    background-color: ${theme.colors.grayLight};
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 60px 0;
    padding: 10px;
    width: 100%;

    ${media.lg`
      display: block;
    `}

    ${media.md`
      display: block;
    `}
  }

  .direction-grid-container {
    background-color: ${theme.colors.white};
    display: grid;
    grid-template-columns: 20% 30% auto;
    column-gap: 25px;
    margin: 15px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    min-width: 90%;
  }

  .grid-item-col1 {
    grid-column: 1;
    font-weight: bold;
    font-size: 18px;
    padding: 0 10px;
    text-align: right;

    ${media.lg`
      font-size: 16px;
    `}

    ${media.md`
      font-size: 14px;
    `}
  }

  .grid-item-col2 {
    grid-column: 2;
    font-weight: bold;
    font-size: 16px;
    padding: 0 10px;
    text-align: right;

    ${media.lg`
      font-size: 16px;
    `}

    ${media.md`
      font-size: 14px;
    `}
  }

  .grid-item-col3 {
    grid-column: 3;
    font-size: 16px;
    padding: 0 10px;

    ${media.lg`
      font-size: 16px;
    `}

    ${media.md`
      font-size: 14px;
    `}
  }


  .direction-block {
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

  .direction-block-title {
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
  
  .direction-block-text{
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

  .direction-block-img {
    align-items: center;
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

  .direction-link {
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