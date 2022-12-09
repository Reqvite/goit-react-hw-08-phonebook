import { GlobalStyle } from './GlobalStyle/GlobalStyle';

import { Route, Routes } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import RegisterForm from 'Pages/RegisterForm/RegisterForm';
import LoginForm from 'Pages/LoginForm/LoginForm';
import Home from 'Pages/Home/Home';
import { useDispatch } from 'react-redux';

import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';
import { Contacts } from 'Pages/Contacts/Contacts';
import { fetchContacts } from 'redux/contacts/operations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
