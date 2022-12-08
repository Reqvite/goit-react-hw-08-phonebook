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
          colorScheme="messenger"
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
            colorScheme="messenger"
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
