import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../redux/Store";
import { NavBarWrap } from "./NavBar.styles";
import { toggleSidebar } from "../../redux/Slices/SidebarSlice";
import { MdClose, MdOutlineMenu } from "react-icons/md"; 
import IconCPVL from "../../assets/Icons/icon_cpvl.svg";

export const NavBar = () => {
  const dispatch: AppDispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.sidebar.isOpen);

  return (
    <NavBarWrap>
      <div className="navbar-content">
        <div className="navbar-head-main">
          <button
            type="button"
            className="sidebar-open-btn"
            onClick={() => dispatch(toggleSidebar())}
          >
            {isOpen ? <MdClose size={33} /> : <MdOutlineMenu size={33} />}
          </button>
        </div>

        <div className="navbar-head-top">
          <img src={IconCPVL} alt="CPVL" width={45} height={45} />
        </div>
      </div>
    </NavBarWrap>
  );
};
