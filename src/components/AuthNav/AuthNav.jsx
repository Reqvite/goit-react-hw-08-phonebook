import { Button, ButtonGroup } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <ButtonGroup>
      <Button
        as={NavLink}
        to="/register"
        colorScheme="messenger"
        variant="ghost"
        fontSize="lg"
        color="white"
      >
        Sign Up
      </Button>
      <Button
        as={NavLink}
        to="/login"
        colorScheme="messenger"
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
