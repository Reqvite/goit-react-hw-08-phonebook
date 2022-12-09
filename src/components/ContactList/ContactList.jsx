import { List, ListItem } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { Contact } from './Contact/Contact';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  console.log(contacts);
  // const contacts = useSelector(getContacts);
  // const filter = useSelector(getFilter)
  // const isLoading = useSelector(getIsLoading)
  // const error = useSelector(getError)

  // function handleFilter() {
  //   return contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()))
  // }
  // handleFilter()

  // const filterContacts = handleFilter();

  return (
    <List
      spacing={3}
      w="70%"
      maxW="400px"
      borderRadius="md"
      bg="#2D3748"
      p={5}
      mt={5}
    >
      {contacts?.map(contact => (
        <ListItem key={contact.id}>
          <Contact contact={contact} />
        </ListItem>
      ))}
      {/* {isLoading ? <Loader />
          :contacts &&
        error ? <Notification>{error}</Notification>
           : contacts?.length === 0
         ? <Notification>You don't have contacts.</Notification>
             :filterContacts?.length === 0
         ? <Notification>No contacts were found matching your request.</Notification>
             :filterContacts?.map(contact => 
              <ListItem key={contact.id} >
                <Contact contact={contact}/>
              </ListItem> )} */}
    </List>
  );
};
