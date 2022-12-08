import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import { Container } from '@chakra-ui/react';

import { Route, Routes } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import RegisterForm from 'Pages/RegisterForm/RegisterForm';
import LoginForm from 'Pages/LoginForm/LoginForm';
import Home from 'Pages/Home/Home';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';

export const App = () => {
  const user = useSelector(selectUser);
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

{
  /* 
        <Container maxW="1200">
          <div
            style={{
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: 40,
              color: '#010101',
            }}
          >
            Phone Book
          </div>
        </Container> */
}
