import { Outlet } from 'react-router-dom';
import { BaseLayoutWrap } from './BaseLayout.styles';
import { Footer } from '../../pages/Footer';
import { NavBar } from '../NavBar/NavBar.component';
import { Sidebar } from '../Sidebar/Sidebar.component';
import { Section } from '../Section/Section.component';

import { IAllowedRoutes } from '../../components/Sidebar/Sidebar.component';
import { useQuery } from '../../hooks';
import { API, getURI } from '../../services';
import { useLocalStorage } from 'usehooks-ts';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const BaseLayout = () => {

  const { data: allowedRoutes } = useQuery<IAllowedRoutes[]>({
    url: getURI(API.profile)
  });

  const [, setIsLogged] = useLocalStorage(
    import.meta.env.VITE_REACT_APP_LOGGED_KEY,
    false
  );

  const navigate = useNavigate();

  const doLogout = useCallback(() => {
    setIsLogged(false);
  }, [setIsLogged]);

  const navTo = useCallback(
    (link: IAllowedRoutes) => {
      navigate(link.route);
    },
    [navigate]
  );

  if (!allowedRoutes) return null;

  return (
    <BaseLayoutWrap>
      <Sidebar 
        onLogout={doLogout} 
        onNav={navTo} 
        allowedRoutes={allowedRoutes}
      />
      <div className='main-content-wrapper'>
        <NavBar />
        <Outlet />
        <Section />
        <Footer />
      </div>
    </BaseLayoutWrap>
  )
}
