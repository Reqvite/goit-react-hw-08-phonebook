import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import { useRef } from 'react';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { AddIcon } from '@chakra-ui/icons';

export const DrawerBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = useRef();

  return (
    <>
      <Button
        type="submit"
        colorScheme="messenger"
        mt={2}
        onClick={onOpen}
        leftIcon={<AddIcon />}
      >
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
              <ContactForm />
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button
              variant="outline"
              mr={3}
              onClick={onClose}
              _hover={{ bg: 'blue.500', color: ' white' }}
            >
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
