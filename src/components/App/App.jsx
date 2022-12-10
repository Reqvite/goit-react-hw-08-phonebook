import { GlobalStyle } from '../GlobalStyle/GlobalStyle';

import { Route, Routes } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';
import RegisterForm from 'Pages/RegisterForm/RegisterForm';
import LoginForm from 'Pages/LoginForm/LoginForm';
import Home from 'Pages/Home/Home';
import { PrivateRoute } from '../PrivatRoute/PrivateRoute';
import { RestrictedRoute } from '../RestrictedRoute/RestrictedRoute';
import { useDispatch } from 'react-redux';

import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';
import { Contacts } from 'Pages/Contacts/Contacts';
import { useAuth } from 'hooks';
import { AppLoader } from './AppLoader/AppLoader';
import { Notification } from 'components/Notification/Notification';

export const App = () => {
  const dispatch = useDispatch();

  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <AppLoader />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={<RegisterForm />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                component={<LoginForm />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={<Contacts />} redirecTo="/login" />
            }
          />
        </Route>
      </Routes>
      <GlobalStyle />
      <Notification />;
    </>
  );
};
