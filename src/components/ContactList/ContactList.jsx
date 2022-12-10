import { List, ListItem } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/contacts/selectors';
import { Contact } from './Contact/Contact';
import { ContactListSkeleton } from './ContactListSleketon/ContactListSkeleton';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  // const isLoading = useSelector(getIsLoading)
  // const error = useSelector(getError)

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
      <ContactListSkeleton />
      {filterContacts?.map(contact => (
        <ListItem key={contact.id}>
          <Contact contact={contact} />
        </ListItem>
      ))}
    </List>
  );
};
