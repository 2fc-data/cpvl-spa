import { media, theme } from "../../styles/Theme/theme";
import styled from "styled-components";

interface SidebarWrapProps {
  $isOpen: boolean; // Use a dollar sign ($) prefix to indicate it is used only in styles
}

export const SidebarWrap = styled.div<SidebarWrapProps>`
  background: ${theme.colors.white};
  box-shadow: rgba(0, 0, 0, 0.3) 0 20px 30px;
  color: ${theme.colors.greenDark};
  height: 100%;
  left: 0;
  padding: 9px 0;
  position: fixed;
  top: 0;
  width: 300px;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
  

  /* Apply transform logic based on $isOpen prop */
  transform: ${({ $isOpen }) => ($isOpen ? 'translateX(0)' : 'translateX(-100%)')};

  ${media.xxl`
    width: 300px;
  `}

  ${media.xl`
    width: 72px;
  `}

  ${media.lg`
    width: 72px;
  `}

  ${media.md`
    transform: ${({ $isOpen }) => ($isOpen ? 'translateX(0)' : 'translateX(-100%)')};
    width: 260px;
  `}

  .sidebar-content {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .sidebar-head {
    align-items: center;
    border-bottom: 1px solid ${theme.colors.green2};
    display: flex;
    min-height: 72px;
    padding: 20px;

    ${media.xl`
      justify-content: center;
      padding: 12px;
    `}

    ${media.md`
      justify-content: flex-start; 
    `}

    .sidebar-close-btn {
      color: ${theme.colors.greenDark};
      margin-left: auto;
      font-size: 24px;

      ${media.md`
        display: block; 
      `}
    }
  }

  .sidebar-nav {
    flex: 1;
    min-height: calc(100% - 90px);
    overflow-y: auto;
    padding: 32px 20px;

    ${media.xl`
      padding: 24px 16px;
    `}
  }

  .sidenav-list {
    display: grid;
    row-gap: 20px;

    ${media.lg`
      row-gap: 16px;
    `}
  }

  .sidenav-item {
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

  .sidenav-link {
    align-items: center;
    display: flex;
    column-gap: 12px;
    font-size: 16px;

    &:hover {
      opacity: 0.8;
      transition: ${theme.transitions.easeInOut};
    }

    .link-icon {
      align-items: center;
      display: flex;
      justify-content: center;
      height: 28px;
      width: 28px;
    }

    .link-text {
      font-weight: 500;

      ${media.xl`
        display: none;
      `}

      ${media.md`
        display: block; 
      `}
    }
  }

  &.sidebar-active {
    width: 260px;

    .sidebar-head {
      justify-content: flex-start;
      padding: 16px;

      .site-name {
        display: block;
      }

      .sidebar-close-btn {
        display: inline-flex;
      }
    }

    .sidebar-nav .sidenav-item {
      justify-content: flex-start;

      .sidenav-link .link-text {
        display: block;
      }
    }

    ${media.md`
      transform: translateX(0);
    `}
  }
`;
