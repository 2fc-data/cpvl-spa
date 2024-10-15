import styled from "styled-components";
import { media, theme } from "../../styles/theme/theme";

export const NavBarWrap = styled.header`
  margin-bottom: 32px;

  .navbar-head-main {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: space-between;
  }

  .navbar-head-top {
    align-items: center;
    column-gap: 10px;
    display: flex;
    margin-bottom: 2px;

    .navbar-head-breadcrumb {
      font-size: 14px;      
    } 

    .sidebar-open-btn {
      color: ${theme.colors.greenDark};
      cursor: pointer;
      display: none;
      transition: ${theme.transitions.easeInOut};
      
      &:hover{
        opacity: 0.9;
      }

      ${media.xl`
        align-items: center;
        display: inline-flex;
        justify-content: center;
      `}  
    }
  }

  .navbar-head-ttl {
    font-size: 32px;
    font-weight: 700;
  
    ${media.lg`
      font-size: 24px;
    `}
  }

  .navbar-head-rtl {
    align-items: center;
    column-gap: 20px;
    border-radius: 100vh;
    background-color: ${theme.colors.green};
    display: flex;
    justify-content: flex-end;
    padding: 10px;
  
    ${media.sm`
      column-gap: 12px;
      width: 100%;
    `}
  }

  .navbar-head-search {
    align-items: stretch;
    background: ${theme.colors.white};
    border: 0;
    border-radius: 100vh;
    column-gap: 10px;
    display: flex;
    max-width: 214px;
    padding: 0 20px;
  }

  .navbar-search-icon {
    align-items: center;
    align-self: center;
    display: flex;
    justify-content: center;
  }

  .navbar-search-input {
    background: transparent;
    border: 0;
    caret-color: ${theme.colors.greenDark};
    color: ${theme.colors.greenDark};
    font-size: 14px;
    height: 40px;
    outline: 0;

    &::placeholder {
      color: ${theme.colors.greenDark};
    }
  } 

  .navbar-head-misc{
    align-items: center;
    gap: 20px;
    display: flex;
    justify-content: center;

    button{
      color: ${theme.colors.white};
    }

    .navbar-head-notif, 
    .navbar-head-info {
      align-items: center;
      display: flex;
      height: 24px;
      justify-content: center;
      width: 24px;
    }
  }

  .navbar-head-avatar {
    border-radius: 100%;
    height: 42px;
    overflow: hidden;
    width: 42px;

    img{
      height: 100%;
      object-fit: cover;
      object-position: top;
      width: 100%;
    }
  }
`;
