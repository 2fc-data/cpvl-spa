import { media, theme } from "../../styles/Theme/theme";
import styled from "styled-components";

interface SidebarWrapProps {
  $isSidebarOpen: boolean; // Use $ prefix for styled-component props
}

export const SidebarWrap = styled.div<SidebarWrapProps>`
  background:  ${theme.colors.white};
  box-shadow: rgba(0, 0, 0, 0.3) 0 0px 10px;
  color: ${theme.colors.greenComplem};
  height: 100%;
  left: 0px;
  position: fixed;
  top: 0px;
  width: 18%;
  transition: transform 0.4s ease-in-out;  
  transform: ${({ $isSidebarOpen }) => ($isSidebarOpen ? 'translatex(0)' : 'translatex(-100%)')};

  ${media.xxl`
    /* background: ${theme.colors.yellow}; */
    width: 300px;
  `}

  ${media.xl`
    /* background: ${theme.colors.warning}; */
    width: 280px;
  `}

  ${media.lg`
    /* background: ${theme.colors.green}; */
    width: 260px;
  `}

  ${media.md`
    /* background: ${theme.colors.blueSky}; */
    width: 240px;
  `}

  .sidebar-content {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .sidebar-head {
    align-items: center;
    display: flex;
    height: 320px;
    justify-content: right;
    padding: 0 20px;
    color: ${theme.colors.white};
  }

  .sidebar-close-btn {
    color: ${theme.colors.greenComplem};
    cursor: pointer;
    transition: transform 0.4s ease-out-in;  

    &:hover {
      transform: rotate(180deg);
      transition: ${theme.transitions.easeInOut};
    }
  }

  .sidebar-nav {    
    flex: 1;
    min-height: calc(100% - 109px);
    overflow-y: auto;
    padding: 30px 20px;

    ${media.xl`
      min-height: calc(100% - 101px);
      padding: 24px 16px;
    `}

    ${media.lg`
      min-height: calc(100% - 89px);
      padding: 24px 16px;
    `}

    .sidenav-list{
      display: grid;
      row-gap: 20px;

      ${media.lg`
        row-gap: 16px;
      `}
    }

    .sidenav-item{
      align-items: center;
      display: flex;
      min-height: 36px;
    }

    .sidenav-link{
      align-items: center;
      column-gap: 12px;
      display: flex;
      font-size: 16px; 
      width: 100%;     

      &:hover{        
        background-color: ${theme.colors.greenComplem};
        border-radius: 5px;
        color: ${theme.colors.white};
        cursor: pointer;
        opacity: 0.8;
        transition: ${theme.transitions.easeInOut};
      }

      .link-icon{
        align-items: center;
        display: flex;        
        height: 45px;
        justify-content: center;
        width: 45px;
      }

      .link-text{
        font-weight: 500;
      }

    }
  }

  &.sidebar-active {
    transform: translateY(0);
    width: 300px;
  }
`;
