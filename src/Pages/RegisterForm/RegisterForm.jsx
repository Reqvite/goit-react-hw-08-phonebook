import {
  Box,
  Heading,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  Spacer,
  Link,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { register } from 'redux/auth/operations';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Flex as="main" py={3} justifyContent="center" alignItems="center">
      <Box maxW="360px" w="350px" borderRadius="md" bg="gray.700" p={5} mt={5}>
        <Heading size="md" textAlign="center" mb={2}>
          Create your account
        </Heading>
        <FormControl
          as="form"
          autoComplete="off"
          onSubmit={handleSubmit}
          isRequired
        >
          <FormLabel htmlFor="field-:r1:">Username</FormLabel>
          <Input type="text" name="name" id="field-:r1:" />
          <FormLabel htmlFor="field-:r2:">Email</FormLabel>
          <Input type="email" name="email" id="field-:r2:" />
          <FormLabel htmlFor="field-:r3:">Password</FormLabel>
          <Input type="password" name="password" id="field-:r3:" />
          <Flex justifyContent="center">
            <Button type="submit" colorScheme="messenger" mt={2}>
              Sign Up
            </Button>
          </Flex>
          <Flex alignItems="baseline" mt={3}>
            <Text>Already have an account?</Text>
            <Spacer />
            <Link as={NavLink} to="/login">
              Log in
            </Link>
          </Flex>
        </FormControl>
      </Box>
    </Flex>
  );
};

export default RegisterForm;
