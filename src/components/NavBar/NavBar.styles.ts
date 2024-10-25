import styled from "styled-components";
import { media, theme } from "../../styles/Theme/theme";

export const NavBarWrap = styled.header`

  .navbar-content {    
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    padding: 0px 60px;
    width: 100%;
  }

  .navbar-head-main {
    align-items: center;
    display: flex;
  }

  .sidebar-open-btn {
    color: ${theme.colors.greenComplem};
    cursor: pointer;
    display: inline-flex; 
    align-items: center;
    justify-content: center;
    transition: ${theme.transitions.easeInOut};

    &:hover {
      opacity: 0.9;
    }

    ${media.xl`
      display: inline-flex; 
      padding: 0 10px;
    `}

    ${media.md`
      display: inline-flex; 
      padding: 0 10px;
    `}
  }

  .navbar-head-top {
    display: flex;
    align-items: center;
  }
`;
