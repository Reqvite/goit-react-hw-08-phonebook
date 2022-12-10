import { Button, ButtonGroup } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <ButtonGroup>
      <Button
        as={NavLink}
        to="/register"
        _hover={{ bg: 'blue.500', color: ' white' }}
        variant="ghost"
        fontSize="lg"
        color="white"
      >
        Sign Up
      </Button>
      <Button
        as={NavLink}
        to="/login"
        _hover={{ bg: 'blue.500', color: ' white' }}
        variant="ghost"
        ml="5"
        fontSize="lg"
        color="white"
      >
        Log in
      </Button>
    </ButtonGroup>
  );
};
