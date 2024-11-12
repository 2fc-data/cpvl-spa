import { MdClose, MdOutlineGroups, MdOutlineHome, MdOutlineSatelliteAlt } from "react-icons/md";
import { VscSignOut, VscSignIn } from "react-icons/vsc";
import { SidebarWrap } from "./Sidebar.styles";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSidebarState } from "../../redux/Slices/SidebarSlice";
import { RootState, AppDispatch } from "../../redux/Store";
import { togglePrivateMenu } from "../../redux/Slices/PrivateMenuSlice";

import { useLocalStorage } from 'usehooks-ts';
// import { useState } from "react";

export interface IAllowedRoutes {
  label: string;
  route: string;
}

interface IProps {
  onLogout: () => void;
  onNav: (link: IAllowedRoutes) => void;
  allowedRoutes: IAllowedRoutes[];
}

export const Sidebar = ({ onLogout, onNav, allowedRoutes }: IProps) => {
  const dispatch: AppDispatch = useDispatch();
  const isSidebarOpen = useSelector((state: RootState) => state.sidebar.isSidebarOpen);
  const isPrivateMenuOpen = useSelector((state: RootState) => state.privateMenu.isPrivateMenuOpen);  

  const navigate = useNavigate();
  const [isLogged] = useLocalStorage(import.meta.env.REACT_APP_LOGGED_KEY!, false);
  // const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  // const [isPrivateMenuOpened, setIsPrivateMenuOpened] = useState(false);
  // const [isPublicMenuOpened, setIsPublicMenuOpened] = useState(false);

  
  // const handlePublicMenuClick = (
  //   event: React.MouseEvent<HTMLButtonElement>
  // ) => {
  //   setAnchorEl(event.currentTarget);
  //   setIsPublicMenuOpened(true);
  // };

  // const handlePrivateMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   setAnchorEl(event.currentTarget);
  //   setIsPrivateMenuOpened(true);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  //   setIsPrivateMenuOpened(false);
  //   setIsPublicMenuOpened(false);
  // };

  const handleItemClick = (route: IAllowedRoutes) => {
    onNav(route);
    // handleClose();
  };

  return (
    <SidebarWrap $isSidebarOpen={isSidebarOpen}>
      <div className="sidebar-content">
        <div className="sidebar-head">
          <button
            type="button"
            className="sidebar-close-btn"
            onClick={() => dispatch(setSidebarState(false))}
            // anchorEl={anchorEl}
            // anchorOrigin={{
            //   horizontal: 'right',
            //   vertical: 'bottom'
            // }}
            // onClose={handleClose}
            // open={isPublicMenuOpened}
          >
            <MdClose size={45} />
          </button>
        </div>
        <nav className="sidebar-nav scrollbar">
          <ul className="sidenav-list">
            <li>
              <button
                type="button"
                className="sidenav-link"
                onClick={() => {
                  navigate('/home');
                }}
              >
                <MdOutlineHome size={30} />
                <span className="link-text">Home</span>
              </button>
            </li>
            <li>
              <button
                type="button"
                className="sidenav-link"
                onClick={() => {
                  navigate('/about');
                }}
              >
                <MdOutlineSatelliteAlt size={30} />
                <span className="link-text">Sobre</span>
              </button>
            </li>

            <li>
              <button
                type="button"
                className="sidenav-link"
                onClick={() => {
                  navigate('/direction');
                }}
              >
                <MdOutlineGroups size={30} />
                <span className="link-text">Direção</span>
              </button>
            </li>
            {!isLogged && (
              <li>
                <button
                  type="button"
                  className="sidenav-link"
                  // onClick={(handleClose) => navigate('/login')}
                >
                  <VscSignOut size={30} />
                  <span className="link-text">Login</span>
                </button>
              </li>
            )}
            {isLogged && (
              <>
                <button
                  type="button"
                  // onClick={handlePrivateMenuClick}
                >
                  Restrito                  
                </button>

                <ul
                  // id="main-menu"          
                  // anchorEl={anchorEl}
                  // open={isPrivateMenuOpened}
                  // onClose={handleClose}
                >
                  {allowedRoutes.map((route, idX) => (
                    <li key={idX} onClick={() => handleItemClick(route)}>
                      {route.label}
                    </li>
                  ))}
                </ul>

                <li>
                  <button
                    type="button"
                    className="sidenav-link"
                    onClick={() => {
                      onLogout();
                      dispatch(setSidebarState(false));
                    }}
                  >
                    <VscSignIn size={30} />
                    <span className="link-text">Sair</span>
                  </button>
                </li>
              </>
            )}
          </ul>
        </nav>

      </div>
    </SidebarWrap>
  );
};
