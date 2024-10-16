import styled from "styled-components";
import { media, theme } from "../../styles/Theme/theme";

export const NavBarWrap = styled.header`
  margin-bottom: 32px;

  .navbar-content {
    align-items: center;
    display: flex;
    justify-content: space-around;
    padding: 15px 0;

    ${media.md`
      justify-content: space-between;
      padding: 10px 10px;
    `}
  }

  .navbar-head-main {
    display: flex;
    align-items: center;
  }

  .sidebar-open-btn {
    color: ${theme.colors.greenDark};
    cursor: pointer;
    display: inline-flex; /* Ensure it's visible */
    align-items: center;
    justify-content: center;
    transition: ${theme.transitions.easeInOut};

    &:hover {
      opacity: 0.9;
    }

    ${media.xl`
      display: inline-flex; /* Force visible on larger screens */
    `}

    ${media.md`
      display: inline-flex; /* Visible on medium screens */
    `}
  }

  .navbar-head-top {
    display: flex;
    align-items: center;
  }
`;
