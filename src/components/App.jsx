import { GlobalStyle } from './GlobalStyle/GlobalStyle';

import { Route, Routes } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import RegisterForm from 'Pages/RegisterForm/RegisterForm';
import LoginForm from 'Pages/LoginForm/LoginForm';
import Home from 'Pages/Home/Home';
import { useDispatch, useSelector } from 'react-redux';
import { selectRefreshing, selectUser } from 'redux/auth/selectors';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectRefreshing);
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  console.log(user);
  return (
    <>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
