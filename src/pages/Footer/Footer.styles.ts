import styled from "styled-components";
import { media, theme } from "../../styles/Theme/theme";

export const FooterWrap = styled.div`

  background-color: ${theme.colors.greenComplem};}

  .footer-content {
    align-items: start;
    color: ${theme.colors.white};
    display: flex;
    height: 30vh;
    justify-content: space-between;
    padding: 30px 15px;
    width: auto;

    ${media.md`
      display: flex-wrap;
      padding: 20px 16px;
    }`
  }

  .footer-block {

  }
  

`;