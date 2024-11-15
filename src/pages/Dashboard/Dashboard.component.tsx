<<<<<<< HEAD
import { useCallback } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { Sidebar } from '../../components/Sidebar';
import { API, getURI } from '../../services';
import { IAllowedRoutes } from '../../components/Sidebar/Sidebar.component';
import { useFetch } from '../../hooks';
import { Outlet, useNavigate } from 'react-router-dom';

import { DashboardWrap } from './Dashboard.styles';
import { BlockContentWrap } from '../../styles/Global/default';
=======
import { BlockContentWrap } from "../../styles/Global/default.ts"
import { DashboardWrap } from "./Dashboard.styles.ts"

import { useFetch } from "../../"
import { Sidebar } from "../../components/Sidebar"

>>>>>>> main



export const Dashboard = () => {

  const { data: allowedRoutes } = useFetch<IAllowedRoutes[]>({
    url: getURI(API.profile)
  });

<<<<<<< HEAD
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
=======
  return (
    <DashboardWrap>
      <div className='dash-board-content'>
        <div className="dboard-block dboard-summary-blocks">

          <BlockContentWrap className="dboard-block">
            <div className="summary-block-details">
              <p className="summary-block-ttl">Acesso restrito CPVL!</p>
            </div>
          </BlockContentWrap>

        </div>
      </div>
    </DashboardWrap>
>>>>>>> main
  )
}

