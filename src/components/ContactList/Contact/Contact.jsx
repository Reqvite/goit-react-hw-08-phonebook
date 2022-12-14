import PropTypes from 'prop-types';

import { DeleteIcon } from '@chakra-ui/icons';
import { Button, Flex, Spacer, Text } from '@chakra-ui/react';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

export const Contact = ({ contact }) => {
  const { id, name, number } = contact;

  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <Flex alignItems="baseline">
      <Text>{name}</Text>
      <Spacer minW="15px" />
      <span>{number}</span>
      <Spacer minW="15px" />
      <Button
        type="button"
        colorScheme="messenger"
        onClick={() => handleDelete(id)}
        leftIcon={<DeleteIcon />}
      >
        Delete
      </Button>
    </Flex>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
