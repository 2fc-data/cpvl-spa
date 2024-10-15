import { Outlet } from 'react-router-dom';
import { BaseLayoutWrap } from './BaseLayout.styles';
import Sidebar from '../sidebar/Sidebar';
import NavBar from '../navBar/NavBar';

const BaseLayout = () => {
  return (
    <BaseLayoutWrap>
      <Sidebar isSidebarOpen={false} dispatch={undefined} />
      <div className='main-content-wrapper'>
        <NavBar />
        <Outlet />
      </div>
    </BaseLayoutWrap>
  )
}

export default BaseLayout
