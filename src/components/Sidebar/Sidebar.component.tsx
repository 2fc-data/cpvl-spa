import { MdClose, MdCorporateFare, MdOutlineDashboardCustomize, MdOutlineGroups, MdOutlineHome, MdOutlineLocalAirport, MdOutlineLock, MdOutlineSatelliteAlt } from "react-icons/md";
import { SidebarWrap } from "./Sidebar.styles.ts";
import { FaSkyatlas } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSidebarClose } from '../../redux/slices/sidebarSlice.ts';
import { store } from "../../redux/store.ts";

import { useLocalStorage } from 'usehooks-ts';

export interface IAllowedRoutes {
  label: string;
  route: string;
}

interface IProps {
  onLogout: () => void;
  onNav: (link: IAllowedRoutes) => void;
  allowedRoutes: IAllowedRoutes[];
}

interface SidebarProps {
  isSidebarOpen: boolean;
  dispatch: unknown;
}

const Sidebar: React.FC<SidebarProps> = ({ onLogout, onNav, allowedRoutes }: IProps) => {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector((state: store) => state.sidebar.isSidebarOpen);

  return (
    <SidebarWrap
      className={`${isSidebarOpen ? 'sidebar-active' : ''}`}
    >
      <div className="sidebar-content">
        <div className="sidebar-head">
          <span className="site-icon">
            <FaSkyatlas />
          </span>
          <h3 className="site-name">CPVL</h3>
          <button type="button" className="sidebar-close-btn"
            onClick={() => dispatch(setSidebarClose())}
          >
            <MdClose size={20} />
          </button>
        </div>

        <nav className="sidebar-nav scrollbar">
          <ul className="sidenav-list">
            <li className="sidenav-item">
              <Link className="sidenav-link" to="/">
                <span className="link-icon"><MdOutlineHome size={24} /></span>
                <span className="link-text">Início</span>
              </Link>
            </li>
            <li className="sidenav-item">
              <Link className="sidenav-link" to="/about">
                <span className="link-icon"><MdOutlineSatelliteAlt size={24} /></span>
                <span className="link-text">Sobre</span>
              </Link>
            </li>
            <li className="sidenav-item">
              <Link className="sidenav-link" to="/login">
                <span className="link-icon"><MdOutlineLock size={24} /></span>
                <span className="link-text">Entrar</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </SidebarWrap>
  );
};

export default Sidebar