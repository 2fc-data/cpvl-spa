import { MdClose, MdOutlineGroups, MdOutlineHome, MdOutlineSatelliteAlt } from "react-icons/md";
import { VscSignOut, VscSignIn  } from "react-icons/vsc";
import { SidebarWrap } from "./Sidebar.styles";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSidebarState } from "../../redux/Slices/SidebarSlice";
import { RootState, AppDispatch } from "../../redux/Store";

export const Sidebar = () => {
  const dispatch: AppDispatch = useDispatch();
  const isSidebarOpen = useSelector((state: RootState) => state.sidebar.isSidebarOpen);

  return (
    <SidebarWrap $isSidebarOpen={isSidebarOpen}>
      <div className="sidebar-content">
        <div className="sidebar-head"> 
          <button type="button" className="sidebar-close-btn" onClick={() => dispatch(setSidebarState(false))}>
            <MdClose size={45} />
          </button>
        </div>
        <nav className="sidebar-nav scrollbar">
          <ul className="sidenav-list">
            {["home", "about",  "direction", "login", "logout"].map((item, index) => (
              <li key={index} className="sidenav-item">
                <Link
                  className="sidenav-link"
                  to={`/${item.toLowerCase()}`}
                  onClick={() => dispatch(setSidebarState(false))}
                >
                  <span className="link-icon">
                    {index === 0 && <MdOutlineHome size={30} />}
                    {index === 1 && <MdOutlineSatelliteAlt size={30} />}
                    {index === 2 && <MdOutlineGroups size={30} />}
                    {index === 3 && <VscSignOut size={30} />}
                    {index === 4 && <VscSignIn size={30} />}
                  </span>
                  <span className="link-text">{item}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

      </div>
    </SidebarWrap>
  );
};
