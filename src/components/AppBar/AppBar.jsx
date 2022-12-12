import { AuthNav } from 'components/AuthNav/AuthNav';
import { Box, Flex, Spacer, useMediaQuery } from '@chakra-ui/react';

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Footer } from 'components/Footer/Footer';
import { MobileMenu } from 'components/MobileMenu/MobileMenu';
import { AppLoader } from 'components/AppLoader/AppLoader';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const [isLargerThan578] = useMediaQuery('(min-width: 578px)');

  return (
    <>
      <Box minH="calc(100vh - 51px)" color="white">
        <Box as="header" bg="gray.700" w="100%" p={3}>
          <Flex justifyContent="right" alignItems="baseline">
            {!isLargerThan578 ? (
              <MobileMenu />
            ) : (
              <>
                <Navigation />
                <Spacer />
                {isLoggedIn ? <UserMenu /> : <AuthNav />}
              </>
            )}
          </Flex>
        </Box>
        <Suspense fallback={<AppLoader h={`${100}vh`} />}>
          <Outlet />
        </Suspense>
      </Box>
      <Footer />
    </>
  );
};
