import { MdOutlineExitToApp, MdOutlineGroups, MdOutlineHome, MdOutlineLock, MdOutlineSatelliteAlt } from "react-icons/md";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { TbBorderSides } from "react-icons/tb";
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
            {["home", "about", "airspace", "direction", "regiment", "statute", "login"].map((item, index) => (
              <li key={index} className="sidenav-item">
                <Link
                  className="sidenav-link"
                  to={`/${item.toLowerCase()}`}
                  onClick={() => dispatch(setSidebarState(false))}
                >
                  <span className="link-icon">
                    {index === 0 && <MdOutlineHome size={24} />}
                    {index === 1 && <MdOutlineSatelliteAlt size={24} />}
                    {index === 2 && <TbBorderSides size={24} />}
                    {index === 3 && <MdOutlineGroups size={24} />}
                    {index === 4 && <MdOutlineDocumentScanner size={24} />}
                    {index === 5 && <MdOutlineDocumentScanner size={24} />}
                    {index === 6 && <MdOutlineExitToApp size={24} />}
                    {index === 7 && <MdOutlineLock size={24} />}
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
