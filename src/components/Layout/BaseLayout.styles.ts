import styled from "styled-components";
import { theme, media } from "../../styles/Theme/theme";

export const BaseLayoutWrap = styled.div`
  color: ${theme.colors.greenDark};
  /* background-color: ${theme.colors.white}; */
  display: flex;
  min-height: 100vh;
  width: 100%;

  .main-content-wrapper {
    flex: 1;
    margin-left: 0px;
    padding: 32px 20px;

    ${media.xxl`
      padding: 32px 16px;
    `}

    ${media.xl`
      padding: 24px 16px;
    `}

    ${media.lg`
      padding: 12px 8px;
    `}

    ${media.md`
      margin-left: 0px;
    `}
  }
`;
