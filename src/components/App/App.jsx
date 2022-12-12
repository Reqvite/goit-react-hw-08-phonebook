import { GlobalStyle } from '../GlobalStyle/GlobalStyle';

import { Route, Routes } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';
import Home from 'Pages/Home/Home';
import { PrivateRoute } from '../PrivatRoute/PrivateRoute';
import { RestrictedRoute } from '../RestrictedRoute/RestrictedRoute';
import { useDispatch } from 'react-redux';
import { lazy, useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { AppLoader } from 'components/AppLoader/AppLoader';
import { Notification } from 'components/Notification/Notification';

export const App = () => {
  const dispatch = useDispatch();

  const { isRefreshing } = useAuth();

  const RegisterFormPage = lazy(() =>
    import('Pages/RegisterForm/RegisterForm')
  );
  const LoginFormPage = lazy(() => import('Pages/LoginForm/LoginForm'));
  const ContactsPage = lazy(() => import('Pages/Contacts/Contacts'));

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <AppLoader h={`${100}vh`} />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={<RegisterFormPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                component={<LoginFormPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={<ContactsPage />} redirecTo="/login" />
            }
          />
        </Route>
      </Routes>
      <GlobalStyle />
      <Notification />
    </>
  );
};
