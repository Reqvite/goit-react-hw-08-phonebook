import {
  Box,
  Heading,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Flex justifyContent="center" alignItems="center">
      <Box maxW="360px" w="350px" borderRadius="md" bg="#2D3748" p={5} mt={5}>
        <Heading size="md" textAlign="center" mb={2}>
          Log in to Phonebook
        </Heading>
        <FormControl
          as="form"
          autoComplete="off"
          onSubmit={handleSubmit}
          isRequired
        >
          <FormLabel htmlFor="field-:r2:">Email</FormLabel>
          <Input type="email" name="email" id="field-:r2:" />
          <FormLabel htmlFor="field-:r3:">Password</FormLabel>
          <Input type="password" name="password" id="field-:r3:" />
          <Flex justifyContent="center">
            <Button type="submit" colorScheme="messenger" mt={2}>
              Log in
            </Button>
          </Flex>
        </FormControl>
      </Box>
    </Flex>
  );
};

export default LoginForm;
