import { Input, Flex, FormControl, FormLabel, Button } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts, selectLoading } from 'redux/contacts/selectors';
import { toast } from 'react-hot-toast';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);

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
      toast(`${name} is already in contacts.`, {
        icon: '🤦🏻‍♂️',
        position: 'top-center',
      });
      return;
    } else {
      dispatch(addContact(contact));
    }
    form.reset();
  };

  return (
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
        placeholder="Name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        id="field-:r1:"
      />
      <FormLabel htmlFor="field-:r2:">Number</FormLabel>
      <Input
        type="tel"
        name="number"
        placeholder="Phone number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        id="field-:r2:"
      />
      <Flex justifyContent="center">
        <Button
          isLoading={isLoading}
          type="submit"
          colorScheme="messenger"
          mt={3}
        >
          Submit
        </Button>
      </Flex>
    </FormControl>
  );
};
