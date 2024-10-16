import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../redux/Store";
import { NavBarWrap } from "./NavBar.styles";
import { toggleSidebar } from "../../redux/Slices/SidebarSlice";

import { MdClose, MdOutlineMenu } from "react-icons/md"; 
import LogoCPVL from "../../assets/Images/logo_cpvl_h339_transp.png";

export const NavBar = () => {
  const dispatch: AppDispatch = useDispatch();
  const isSidebarOpen = useSelector((state: RootState) => state.sidebar.isSidebarOpen);

  return (
    <NavBarWrap>
      <div className="navbar-content">
        <div className="navbar-head-top">
          <button
            type="button"
            className="sidebar-open-btn"
            onClick={() => dispatch(toggleSidebar())}
          >
            {isSidebarOpen ? <MdClose size={36} /> : <MdOutlineMenu size={36} />}
          </button>
        </div>

        <div className="navbar-head-top">
          <img src={LogoCPVL} alt="CPVL" width={45} height={45} />
        </div>
      </div>
    </NavBarWrap>
  );
};
