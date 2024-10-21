import { media, theme } from "../../styles/Theme/theme";
import styled from "styled-components";

interface SidebarWrapProps {
  $isSidebarOpen: boolean; // Use $ prefix for styled-component props
}

export const SidebarWrap = styled.div<SidebarWrapProps>`
  background: transparent;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0px 30px;
  color: ${theme.colors.greenComplem};
  height: 100%;
  left: 0;
  padding: 9px 0;
  position: fixed;
  top: 0;
  width: 18%;
  transition: transform 0.4s ease-in-out;  
  transform: ${({ $isSidebarOpen }) => ($isSidebarOpen ? 'translateY(0)' : 'translateY(-100%)')};
  z-index: 0;

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

  .sidebar-nav {
    background-color: ${theme.colors.white};
    flex: 1;
    margin-top: 25%;
    min-height: calc(100% - 90px);
    overflow-y: auto;
    padding: 32px 20px;

    ${media.xl`
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
