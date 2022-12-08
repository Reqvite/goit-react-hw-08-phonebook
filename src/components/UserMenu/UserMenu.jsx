import { Button, Text } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  console.log(user);

  return (
    <>
      <Text fontSize="lg" fontWeight="medium">
        {user.email}
      </Text>
      <Button
        onClick={() => dispatch(logOut())}
        colorScheme="messenger"
        variant="ghost"
        ml="10"
        fontSize="lg"
        color="black"
      >
        Logout
      </Button>
    </>
  );
};
