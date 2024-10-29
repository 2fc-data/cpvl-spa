import { useCallback } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { NavBar } from '../../components/NavBar/NavBar.component';
import { API, getURI } from '../../services';
import { IAllowedRoutes } from '../../components/Sidebar/Sidebar.component';
import { useFetch } from '../../hooks';
import { Outlet, useNavigate } from 'react-router-dom';

export const DashboardHome = () => {
  return (
    <div>Faça seu login para entrar na área restrita.</div>
  )
}

export const Dashboard = () => {
  const { data: allowedRoutes } = useFetch<IAllowedRoutes[]>({
    url: getURI(API.profile)
  });

  const [, setIsLogged] = useLocalStorage(
    process.env.REACT_APP_LOGGED_KEY as string,
    false
  );

  const navigate = useNavigate(); 

  const doLogout = useCallback(() => {
    setIsLogged(false);
    navigate('/');
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
      <NavBar
        allowedRoutes={allowedRoutes}
        onLogout={doLogout}
        onNav={navTo}
      ></NavBar>
      <Outlet />
    </>
  );
};