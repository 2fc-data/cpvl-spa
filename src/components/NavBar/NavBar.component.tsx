import { useDispatch } from "react-redux";
import { NavBarWrap } from "./NavBar.styles";
import { setSidebarOpen } from "../../redux/slices/sidebarSlice";
import { MdOutlineMenu } from "react-icons/md"; // MdOutlineNotifications
// import { FiSearch } from "react-icons/fi";
// import { IoMdInformationCircleOutline } from "react-icons/io";

export const NavBar = () => {
  const dispatch = useDispatch();

  return (
    <NavBarWrap>
      <div className="navbar-content">
        <div className="navbar-head-top">

          <button type="button"
            className="sidebar-open-btn"
            onClick={() => dispatch(setSidebarOpen())}
          >
            <MdOutlineMenu size={24} />
          </button>
          <p
            className="navbar-head-breadcrumb">/ Início
          </p>
        </div>

        <div className="navbar-head-main">
          <h3 className="navbar-head-ttl">Início</h3>
        </div>
      </div>
    </NavBarWrap>
  )
}

