import styled from "styled-components";
import { media, theme } from "../../styles/Theme/theme";

export const NavBarWrap = styled.header`
  margin-bottom: 30px;

  .navbar-content {
    color: ${theme.colors.green2};
    align-items: center;
    display: flex;
    justify-content: space-between;
  }

  .navbar-head-main {
    align-items: center;
    display: flex;
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
