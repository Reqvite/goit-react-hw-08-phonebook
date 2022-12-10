import { Alert, Flex, List, ListItem } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectContacts, selectFilter } from 'redux/contacts/selectors';
import { Contact } from './Contact/Contact';
import { ContactListSkeleton } from './ContactListSleketon/ContactListSkeleton';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  function handleFilter() {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  const filterContacts = handleFilter();

  return (
    <List
      spacing={3}
      w="70%"
      maxW="400px"
      borderRadius="md"
      bg="gray.700"
      p={5}
      mt={5}
    >
      {contacts.length === 0 ? (
        <Flex justifyContent="center">
          <ContactListSkeleton />
        </Flex>
      ) : contacts?.length === 0 ? (
        <Alert status="info" backgroundColor="transparent">
          You don't have contacts.
        </Alert>
      ) : filterContacts?.length === 0 ? (
        <Alert status="info" backgroundColor="transparent">
          No contacts were found matching your request.
        </Alert>
      ) : (
        filterContacts?.map(contact => (
          <ListItem key={contact.id}>
            <Contact contact={contact} />
          </ListItem>
        ))
      )}
    </List>
  );
};
