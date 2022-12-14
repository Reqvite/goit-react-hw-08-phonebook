import { Heading, Input, Box } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { contactsFilter } from 'redux/contacts/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = e => {
    dispatch(contactsFilter(e.target.value));
  };

  return (
    <Box>
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
        bgGradient="linear(to-l, #7928CA, #0078FF)"
        bgClip="text"
        fontSize={20}
        borderColor="black"
        mt={3}
        onChange={handleFilter}
      />
    </Box>
  );
};
