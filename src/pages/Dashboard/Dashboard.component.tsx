import { useCallback } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { Sidebar } from '../../components/Sidebar';
import { API, getURI } from '../../services';
import { IAllowedRoutes } from '../../components/Sidebar/Sidebar.component';
import { useFetch } from '../../hooks';
import { Outlet, useNavigate } from 'react-router-dom';

import { DashboardWrap } from './Dashboard.styles';
import { BlockContentWrap } from '../../styles/Global/default';


export const DashboardHome = () => {
  return (
    <DashboardWrap>
      <div className='dash-board-content'>
        <div className="dboard-block dboard-summary-blocks">
          <BlockContentWrap className="dboard-block">
            Utilize o menu 'RESTRITO' para acessar os serviços.
          </BlockContentWrap>
        </div>
      </div>
    </DashboardWrap>
  );
};

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
