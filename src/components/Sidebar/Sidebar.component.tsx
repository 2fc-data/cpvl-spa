import { MdClose, MdOutlineGroups, MdOutlineHome, MdOutlineSatelliteAlt } from "react-icons/md";
import { VscSignOut, VscSignIn } from "react-icons/vsc";
import { SidebarWrap } from "./Sidebar.styles";
import { Link, useNavigate } from "react-router-dom";
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

  const publicMenu = ["home", "about", "direction", "login"];


  const [isLogged] = useLocalStorage(import.meta.env.VITE_REACT_APP_LOGGED_KEY!, false);
  // const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  // const [isPrivateMenuOpened, setIsPrivateMenuOpened] = useState(false);
  // const [isPublicMenuOpened, setIsPublicMenuOpened] = useState(false);

  console.log('--> ', isLogged) 
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
            {!isLogged && (
              publicMenu.map((item, index) => (
                <li key={index} className="sidenav-item">
                  <Link
                    className="sidenav-link"
                    to={`/${item.toLowerCase()}`}
                    onClick={
                      () => dispatch(setSidebarState(false))}
                  >
                    <span className="link-icon">
                      {index === 0 && <MdOutlineHome size={30} />}
                      {index === 1 && <MdOutlineSatelliteAlt size={30} />}
                      {index === 2 && <MdOutlineGroups size={30} />}
                      {index === 3 && <VscSignOut size={30} />}
                    </span>
                    <span className="link-text">{item}</span>
                  </Link>
                </li>
              ))
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
                  <li>
                    {isPrivateMenuOpen ? <VscSignOut size={30} /> : '' }
                  </li>
                </ul>

                {/* <li>
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
                </li> */}
              </>
            )}
          </ul>
        </nav>

      </div>
    </SidebarWrap>
  );
};


// <nav className="sidebar-nav scrollbar">
// <ul className="sidenav-list">
//   {["home", "about",  "direction", "login", "logout"].map((item, index) => (
//     <li key={index} className="sidenav-item">
//       <Link
//         className="sidenav-link"
//         to={`/${item.toLowerCase()}`}
//         onClick={() => dispatch(setSidebarState(false))}
//       >
//         <span className="link-icon">
//           {index === 0 && <MdOutlineHome size={30} />}
//           {index === 1 && <MdOutlineSatelliteAlt size={30} />}
//           {index === 2 && <MdOutlineGroups size={30} />}
//           {index === 3 && <VscSignOut size={30} />}
//           {index === 4 && <VscSignIn size={30} />}
//         </span>
//         <span className="link-text">{item}</span>
//       </Link>
//     </li>
//   ))}
// </ul>
// </nav>