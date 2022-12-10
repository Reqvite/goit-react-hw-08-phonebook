import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirecTo = '/' }) => {
  const { isLoggedIn, isrRefreshing } = useAuth();

  const shouldRedirect = !isrRefreshing && !isLoggedIn;
  return shouldRedirect ? <Navigate to={redirecTo} /> : Component;
};
