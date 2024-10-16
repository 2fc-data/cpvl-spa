import { Outlet } from 'react-router-dom';
import { BaseLayoutWrap } from './BaseLayout.styles';
import { Sidebar } from '../Sidebar/Sidebar.component';
import { NavBar } from '../NavBar/NavBar.component';

export const BaseLayout = () => {
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
