import {
  IconButton,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';

import { HamburgerIcon } from '@chakra-ui/icons';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { Navigation } from 'components/Navigation/Navigation';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const MobileMenu = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const title = isLoggedIn ? 'Profile' : 'Authentication';
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon />}
        _hover={{ bg: 'blue.500', color: ' white' }}
        variant="outline"
      />
      <MenuList backgroundColor="gray.700">
        <MenuGroup title={title}>
          <MenuItem as="li" flexDirection="column" backgroundColor="gray.700">
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </MenuItem>
          <MenuItem
            as="li"
            backgroundColor="gray.700"
            mx="auto"
            justifyContent="center"
          >
            <Navigation />
          </MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};
