import { Box, Heading, Flex } from '@chakra-ui/react';

import { ContactList } from 'components/ContactList/ContactList';
import { DrawerBar } from 'components/Drawer/Drawer';
import { Filter } from 'components/Filter/Filter';

export const Contacts = () => {
  return (
    <Box>
      <Flex flexDirection="column" alignItems="center">
        <Filter />
        <Heading
          as="h2"
          size="xl"
          bgGradient="linear(to-l, #7928CA, #0078FF)"
          bgClip="text"
        >
          Your contacts
        </Heading>
        <DrawerBar />
        <ContactList />
      </Flex>
    </Box>
  );
};
