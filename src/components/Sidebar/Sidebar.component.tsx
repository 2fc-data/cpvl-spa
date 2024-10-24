import { MdOutlineExitToApp, MdOutlineGroups, MdOutlineHome, MdOutlineLock, MdOutlineSatelliteAlt } from "react-icons/md";
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
        <nav className="sidebar-nav scrollbar">
          <ul className="sidenav-list">
            {["home", "about",  "direction", "login"].map((item, index) => (
              <li key={index} className="sidenav-item">
                <Link
                  className="sidenav-link"
                  to={`/${item.toLowerCase()}`}
                  onClick={() => dispatch(setSidebarState(false))}
                >
                  <span className="link-icon">
                    {index === 0 && <MdOutlineHome size={36} />}
                    {index === 1 && <MdOutlineSatelliteAlt size={36} />}
                    {index === 2 && <MdOutlineGroups size={36} />}
                    {index === 3 && <MdOutlineExitToApp size={36} />}
                    {index === 4 && <MdOutlineLock size={36} />}
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
