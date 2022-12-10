import { Box, Heading, Flex } from '@chakra-ui/react';

import { ContactList } from 'components/ContactList/ContactList';
import { DrawerBar } from 'components/Drawer/Drawer';
import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectRefreshing } from 'redux/auth/selectors';
import { fetchContacts } from 'redux/contacts/operations';

export const Contacts = () => {
  const dispatch = useDispatch();
  const isRefresh = useSelector(selectRefreshing);

  useEffect(() => {
    if (isRefresh) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isRefresh]);

  return (
    <Box as="main" py={3}>
      <Flex flexDirection="column" alignItems="center">
        <Filter />
        <Heading
          as="h2"
          size="xl"
          bgGradient="linear(to-l, #7928CA, #0078FF)"
          bgClip="text"
          mt={3}
        >
          Your contacts
        </Heading>
        <DrawerBar />
        <ContactList />
      </Flex>
    </Box>
  );
};
