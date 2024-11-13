import { Outlet, Navigate } from 'react-router-dom';
import { useLocalStorage } from 'usehooks-ts';

export const PrivateRoutes = () => {
  const [isLogged] = useLocalStorage(import.meta.env.VITE_REACT_APP_LOGGED_KEY, false);
  return !isLogged ? <Navigate to="/home" /> : <Outlet />;
};
