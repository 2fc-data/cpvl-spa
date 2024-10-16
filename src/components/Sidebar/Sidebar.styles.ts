import { media, theme } from "../../styles/Theme/theme";
import styled from "styled-components";

interface SidebarWrapProps {
  $isOpen: boolean; // Use $ prefix for styled-component props
}

export const SidebarWrap = styled.div<SidebarWrapProps>`
  /* background: ${theme.colors.white}; */
  background: transparent;
  box-shadow: rgba(0, 0, 0, 0.3) 0 0px 30px;
  color: ${theme.colors.greenDark};
  height: 100%;
  left: 0;
  padding: 9px 0;
  position: fixed;
  top: 0;
  width: 18%;
  transition: transform 0.4s ease-in-out;  
  transform: ${({ $isOpen }) => ($isOpen ? 'translateY(0)' : 'translateY(-100%)')};
  z-index: 0;

  ${media.xxl`
    width: 300px;
  `}

  ${media.xxl`
    width: 280px;
  `}

  ${media.xxl`
    width: 260px;
  `}

  ${media.md`
    width: 240px;
  `}

  .sidebar-content {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .sidebar-nav {
    flex: 1;
    margin-top: 54px;
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

    .sidebar-item{
      align-items: center;
      display: flex;
      min-height: 36px;
      
      ${media.xl`
        justify-content: center;
      `}

      ${media.md`
        justify-content: flex-start;
      `}
    }

    .sidebar-link{
      align-items: center;
      column-gap: 12px;
      display: flex;
      font-size: 16px;      

      &:hover{
        opacity: 0.8;
        transition: ${theme.transitions.easeInOut};
      }

      .link-icon{
        align-items: center;
        display: flex;        
        height: 28px;
        justify-content: center;
        width: 28px;
      }

      .link-text{
        font-weight: 500;

        ${media.xl`
          display: none;
        `}
        
        ${media.md`
          display: block;
        `}
      }

    }
  }

  &.sidebar-active {
    transform: translateY(0);
    width: 300px;
  }
`;
