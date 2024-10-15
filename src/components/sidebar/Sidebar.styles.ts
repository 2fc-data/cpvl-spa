import { media, theme } from "../../styles/theme/theme";
import styled from "styled-components";

export const SidebarWrap = styled.div`
  background: ${theme.colors.white};
  box-shadow: rgba(0, 0, 0, 0.3) 0 20px 30px;
  color: ${theme.colors.greenDark};
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 260px;
  z-index: 1000;
  
  ${media.xxl`
    width: 240px;
  `}

  ${media.xl`
    width: 72px;
  `}

  ${media.md`
    transform: translateX(-100%);
    width: 260px;
  `}

  .sidebar-content{
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .sidebar-head{
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    column-gap: 12px;
    display: flex;
    min-height: 72px;
    padding: 20px;
 
    ${media.xl`
      justify-content: center;
      padding: 16px 12px;
    `}

    ${media.md`
      justify-content: flex-start; 
    `}

    .site-icon{
      align-items: center;
      border-radius: 4px;
      display: flex;
      height: 32px;
      justify-content: center;
      width: 32px;

      svg{
        height: 28px;
        width: 28px;
      }
    }

    .site-name{
      font-size: 24px;
      font-weight: 700;
      text-transform: uppercase;
      
      ${media.xl`
        display: none;
      `}

      ${media.md`
        display: block; 
      `}
    }

    .sidebar-close-btn{
      color: ${theme.colors.greenDark};
      display: none;
      margin-left: auto;

      ${media.md`
        display: block; 
      `}
    }
  }

  .sidebar-nav{
    flex: 1;
    min-height: calc(100% - 90px);
    overflow-y: scroll;
    padding: 32px 20px;

    ${media.xl`
      padding: 24px 16px;
    `}
  }

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

    ${media.xl`
      justify-content: center;
    `}

    ${media.md`
      justify-content: flex-start;
    `}
  }

  .sidenav-link{
    align-items: center;
    display: flex;
    column-gap: 12px;
    font-size: 16px;

    &:hover{
      opacity: 0.8;
      transition: ${theme.transitions.easeInOut};
    }

    .link-icon{
      align-items: center;
      display: flex;
      justify-content: center;
      height: 28px;
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

  &.sidebar-active{
    position: fixed;
    width: 260px;

    .sidebar-head{
      justify-content: flex-start;
      padding: 16px; 

      .site-name{
        display: block;
      }

      .side-bar-close-btn{
        display: inline-flex;
      }
    }

    .sadebar-nav{
      .sidenav-item{
        justify-content: flex-start;

        .sidenav-link{
          .link-text{
            display: block;
          }
        }
      }
    }

    ${media.md`
      transform: translateX(0);
    `}
  }

`;