import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../redux/Store";
import { NavBarWrap } from "./NavBar.styles";
import { toggleSidebar } from "../../redux/Slices/SidebarSlice";
import { MdOutlineMenu } from "react-icons/md"; 
import IconCPVL from "../../assets/Icons/icon_cpvl.svg";

export const NavBar = () => {
  const dispatch: AppDispatch = useDispatch();
  const isSidebarOpen = useSelector((state: RootState) => state.sidebar.isSidebarOpen);

  return (
    <NavBarWrap>
      <div className="navbar-content">
        <div className="navbar-head-main">
          <button
            type="button"
            className="sidebar-open-btn"
            onClick={() => dispatch(toggleSidebar())}
          >
            {isSidebarOpen ? '' : <MdOutlineMenu size={45} />}
          </button>
        </div>

        <div className="navbar-head-top">
          <img src={IconCPVL} alt="CPVL" width={45} height={45} />
        </div>
      </div>
    </NavBarWrap>
  );
};