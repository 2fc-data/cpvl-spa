import styled from "styled-components";
import { media, theme } from "../../styles/Theme/theme";

export const SectionWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
  padding: 45px 0px;
  

  ${media.lg`
    flex-direction: column;
    justify-content: center;
    padding: 20px 0;
  `}

  ${media.md`
    flex-direction: column;
    justify-content: center;
    padding: 15px 0;
  `}

  .section-content {
    margin: 0 15px;
    padding: 15px;  
  }

  .section-title {
    border-bottom: 2px solid ${theme.colors.greenComplem};
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
  }

  .section-description {
    padding: 15px 0;
    font-size: 14px;
    font-weight: 500;
    line-height: 2;

  }

  .section-link {
    align-items: center;
    display: flex;
    background-color: ${theme.colors.greenComplem};
    border: 1px solid ${theme.colors.white};
    border-radius: 3px;
    color: ${theme.colors.white};
    justify-content: center;
    margin-top: 15px;
    padding: 2px 5px ;
    width: 90px;

    &:hover {
      background-color: ${theme.colors.white};
      border: 1px solid ${theme.colors.greenComplem};
      border-radius: 3px;
      color: ${theme.colors.greenComplem};
      cursor: pointer;
    }
  }
`
