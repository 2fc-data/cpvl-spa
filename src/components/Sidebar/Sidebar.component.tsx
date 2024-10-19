import { MdOutlineExitToApp, MdOutlineHome, MdOutlineLock, MdOutlineSatelliteAlt } from "react-icons/md";
import { SidebarWrap } from "./Sidebar.styles";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSidebarState } from "../../redux/Slices/SidebarSlice";
import { RootState, AppDispatch } from "../../redux/Store";

export const Sidebar = () => {
  const dispatch: AppDispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.sidebar.isOpen);

  return (
    <SidebarWrap $isOpen={isOpen}>
      <div className="sidebar-content">
        <nav className="sidebar-nav scrollbar">
          <ul className="sidenav-list">
            {["home", "about", "logout", "login"].map((item, index) => (
              <li key={index} className="sidenav-item">
                <Link
                  className="sidenav-link"
                  to={`/${item.toLowerCase()}`}
                  onClick={() => dispatch(setSidebarState(false))}
                >
                  <span className="link-icon">
                    {index === 0 && <MdOutlineHome size={24} />}
                    {index === 1 && <MdOutlineSatelliteAlt size={24} />}
                    {index === 2 && <MdOutlineExitToApp size={24} />}
                    {index === 3 && <MdOutlineLock size={24} />}
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
