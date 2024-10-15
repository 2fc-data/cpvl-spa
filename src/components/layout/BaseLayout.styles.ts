import styled from "styled-components";
import { theme, media } from "../../styles/theme/theme";

export const BaseLayoutWrap = styled.div`
  color: ${theme.colors.greenDark};
  display: flex;
  min-height: 100vh;
  width: 100%;

  .main-content-wrapper {
    flex: 1;
    margin-left: 260px;
    padding: 32px 20px;

    ${media.xxl`
      margin-left: 260px;
      padding: 32px 16px;
    `}

    ${media.xl`
      margin-left: 72px;
      padding: 24px 16px;
    `}

    ${media.md`
      margin-left: 0;
    `}
  }

`;
