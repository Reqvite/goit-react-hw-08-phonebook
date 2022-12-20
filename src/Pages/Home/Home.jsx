import { Box, Flex, Heading, Image, Button } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';

const Home = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const route = isLoggedIn ? '/contacts' : '/login';
  return (
    <Box as="main" maxW="1200px" mx="auto" py={3}>
      <Heading
        as="h1"
        size="4xl"
        bgGradient="linear(to-l, #7928CA, #0078FF)"
        bgClip="text"
        textAlign="center"
      >
        PhoneBook
      </Heading>
      <Flex flexDirection="column" alignItems="center">
        <Image
          src="https://launchux.com/wp-content/uploads/2021/01/Cell-Phone.gif"
          alt="Phone"
          w="270px"
          objectFit="cover"
        />
        <Button
          as={NavLink}
          to={route}
          colorScheme="messenger"
          variant="solid"
          fontSize="lg"
          mt={3}
        >
          Try it now!
        </Button>
      </Flex>
    </Box>
  );
};

export default Home;
