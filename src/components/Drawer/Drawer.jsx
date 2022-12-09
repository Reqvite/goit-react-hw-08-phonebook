import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

export const DrawerBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = useRef();

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements[0].value;
    const number = form.elements[1].value;

    const contact = {
      name,
      number,
    };

    if (
      contacts
        ?.map(({ name }) => name.toLowerCase())
        .includes(name.toLowerCase())
    ) {
      alert(`${name} is already in contacts.`);
    } else {
      dispatch(addContact(contact));
    }
    form.reset();
  };

  return (
    <>
      <Button type="submit" colorScheme="messenger" mt={2} onClick={onOpen}>
        Add contact
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent backgroundColor="#2D3748">
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Add new account</DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <FormControl
                as="form"
                autoComplete="off"
                isRequired
                onSubmit={handleSubmit}
              >
                <FormLabel htmlFor="field-:r1:">Name</FormLabel>
                <Input
                  type="text"
                  name="name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  id="field-:r1:"
                />
                <FormLabel htmlFor="field-:r2:">Number</FormLabel>
                <Input
                  type="tel"
                  name="number"
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  id="field-:r2:"
                />

                <Button type="submit" colorScheme="messenger">
                  Submit
                </Button>
              </FormControl>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
