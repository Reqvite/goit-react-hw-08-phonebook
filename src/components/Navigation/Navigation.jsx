import { Button, ButtonGroup } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <ButtonGroup>
        <Button
          as={NavLink}
          to="/"
          _hover={{ bg: 'blue.500', color: ' white' }}
          variant="ghost"
          fontSize="lg"
          color="white"
        >
          Home
        </Button>
        {isLoggedIn && (
          <Button
            as={NavLink}
            to="/contacts"
            _hover={{ bg: 'blue.500', color: ' white' }}
            variant="ghost"
            ml="5"
            fontSize="lg"
            color="white"
          >
            Contacts
          </Button>
        )}
      </ButtonGroup>
    </nav>
  );
};
