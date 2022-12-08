import { AuthNav } from 'components/AuthNav/AuthNav';
import { Box, Flex, Spacer } from '@chakra-ui/react';

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Footer } from 'components/Footer/Footer';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <Box minH="calc(100vh - 51px)">
        <Box as="header" bg="#2D3748" w="100%" p={3}>
          <Flex justifyContent="right" alignItems="baseline">
            <Navigation />
            <Spacer />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Flex>
        </Box>
        <Suspense>
          <Outlet />
        </Suspense>
      </Box>
      <Footer />
    </>
  );
};
