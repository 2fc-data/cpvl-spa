import { media, theme } from "../../styles/Theme/theme";
import styled from "styled-components";

interface SidebarWrapProps {
  $isOpen: boolean; // Use $ prefix for styled-component props
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
  transition: transform 0.3s ease-in-out;
  z-index: 1000;

  transform: ${({ $isOpen }) => ($isOpen ? 'translateX(0)' : 'translateX(-100%)')};

  ${media.xxl`
    width: 300px;
  `}

  ${media.md`
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

    .sidebar-close-btn {
      color: ${theme.colors.greenDark};
      margin-left: auto;
      font-size: 24px;
    }
  }

  .sidebar-nav {
    flex: 1;
    min-height: calc(100% - 90px);
    overflow-y: auto;
    padding: 32px 20px;
  }

  &.sidebar-active {
    transform: translateX(0);
    width: 260px;
  }
`;
