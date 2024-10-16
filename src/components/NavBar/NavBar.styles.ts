import styled from "styled-components";
import { media, theme } from "../../styles/Theme/theme";

export const NavBarWrap = styled.header`
  margin-bottom: 32px;

  .navbar-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .navbar-head-main {
    display: flex;
    align-items: center;
    gap: 16px;
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
    border: 2px solid green;
  }
`;
