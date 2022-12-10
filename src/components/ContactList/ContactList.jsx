import { Alert, List, ListItem } from '@chakra-ui/react';
import { AppLoader } from 'components/AppLoader/AppLoader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import {
  selectContacts,
  selectFilter,
  selectLoading,
} from 'redux/contacts/selectors';
import { Contact } from './Contact/Contact';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectLoading);
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
      w="90%"
      maxW="400px"
      borderRadius="md"
      bg="gray.700"
      p={5}
      mt={5}
    >
      {contacts.length === 0 && isLoading ? (
        <AppLoader />
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
