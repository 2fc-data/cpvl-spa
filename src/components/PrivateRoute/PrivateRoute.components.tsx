import { Outlet, Navigate } from 'react-router-dom';
import { useLocalStorage } from 'usehooks-ts';

export const PrivateRoutes = () => {
  const [isLogged] = useLocalStorage(process.env.REACT_APP_LOGGED_KEY, false);
  return !Boolean(isLogged) ? <Navigate to="/home" /> : <Outlet />;
};
