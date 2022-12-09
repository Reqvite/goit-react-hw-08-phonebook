import { Heading, Input, Box } from '@chakra-ui/react';

export const Filter = () => {
  //   const dispatch = useDispatch();

  //   const handleFilter = e => {
  //     dispatch(contactsFilter(e.target.value));
  //   };

  return (
    <Box mt={3}>
      <Heading
        as="h3"
        size="lg"
        bgGradient="linear(to-l, #7928CA, #0078FF)"
        bgClip="text"
        textAlign="center"
      >
        Find contacts by name
      </Heading>
      <Input
        maxW="350px"
        input="text"
        variant="outline"
        placeholder="Enter name"
        focusBorderColor="#0078FF"
        borderColor="black"
        mt={3}
      />
    </Box>
  );
};
