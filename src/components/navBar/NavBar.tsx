import { useDispatch } from "react-redux";
import { NavBarWrap } from "./NavBar.styles";
import { setSidebarOpen } from "../../redux/slices/sidebarSlice";
import { MdOutlineMenu } from "react-icons/md"; // MdOutlineNotifications
// import { FiSearch } from "react-icons/fi";
// import { IoMdInformationCircleOutline } from "react-icons/io";

const NavBar = () => {
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

          {/* <div className="navbar-head-rtl">  
            <form className="navbar-head-search">
              <span className="navbar-search-icon">
                <FiSearch />
              </span>
              <input type="text"
                className="navbar-search-input"
                placeholder="Pesquisar"
              />
            </form>

            <div className="navbar-head-misc">
              <button type="button" className="navbar-head-notif">
                  <MdOutlineNotifications size={24} />
              </button>
              <button type="button" className="navbar-head-info">
                  <IoMdInformationCircleOutline size={24} />
              </button>
            </div>

            <div className="navbar-head-profile">
              <div className="navbar-head-avatar">
                IMG
                <img src='' alt='' />
              </div>
            </div>
          </div> */}

        </div>
      </div>
    </NavBarWrap>
  )
}

export default NavBar
