import { Outlet } from 'react-router-dom';
import { BaseLayoutWrap } from './BaseLayout.styles';
import { Footer } from '../../pages/Footer';
import { NavBar } from '../NavBar/NavBar.component';
import { Sidebar } from '../Sidebar/Sidebar.component';
import { Section } from '../Section/Section.component';

export const BaseLayout = () => {
  return (
    <BaseLayoutWrap>
      <Sidebar />
      <div className='main-content-wrapper'>
        <NavBar />
        <Outlet />
        <Section />
        <Footer />
      </div>
    </BaseLayoutWrap>
  )
}
