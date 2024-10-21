import { theme } from "../../styles/Theme/theme";
import styled from "styled-components";
import image_se from "../../assets/Images/se.jpg";

export const HomeWrap = styled.div`

  .home-content {
    align-items: center;
    background-image: url(${image_se});
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    height: 88vh;
    justify-content: center;
    width: auto;
  }

  .home-title{
    align-items: center;
    border: 2px solid ${theme.colors.white};
    color: ${theme.colors.white};
    display: flex;        
    font-size: 32px;
    font-weight: 700;
    justify-content: center;
    margin-top: -30rem;
    padding: 12px 20px;
    text-transform: uppercase;
  }

  .home-subtitle{
    align-items: center;
    border-bottom: 2px solid ${theme.colors.white};
    color: ${theme.colors.white};      
    font-size: 14px;
    font-weight: 500;
    justify-content: center;
    margin-top: 1rem;
  }

`