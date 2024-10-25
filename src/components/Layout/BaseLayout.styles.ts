import styled from "styled-components";
import { theme, media } from "../../styles/Theme/theme";

export const BaseLayoutWrap = styled.div`
  color: ${theme.colors.greenDark};
  display: flex;
  min-height: 100vh;
  width: 100%;

  .main-content-wrapper {
    flex: 1;
    padding: 15px 0;

    ${media.xxl`
      padding: 32px 0px;
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
