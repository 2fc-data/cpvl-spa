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

    ${media.lg`
      padding: 0px 15px;
    `}

    ${media.md`      
      padding: 0px 10px;
    `}
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
    padding-top: 15px;
    transition: ${theme.transitions.easeInOut};

    &:hover {
      opacity: 0.9;
    }
  }

  .navbar-head-top {
    display: flex;
    align-items: center;
  }
`;
