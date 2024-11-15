import { useCallback } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { Sidebar } from '../../components/Sidebar';
import { API, getURI } from '../../services';
import { IAllowedRoutes } from '../../components/Sidebar';
import { useFetch } from '../../hooks';
import { Outlet, useNavigate } from 'react-router-dom';

import { DashboardWrap } from './Dashboard.styles';

export const Dashboard = () => {

  const { data: allowedRoutes } = useFetch<IAllowedRoutes[]>({
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
    <>
      <Sidebar
        onLogout={doLogout}
        allowedRoutes={allowedRoutes}
        onNav={navTo}
      />
      <DashboardWrap>
        <Outlet />
      </DashboardWrap>
    </>
  )
}

