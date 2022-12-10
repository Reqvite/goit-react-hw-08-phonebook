import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Box, Link, Text } from '@chakra-ui/react';

export const Footer = () => {
  return (
    <Box as="footer" bg="#2D3748" w="100%" p={3}>
      <Text fontSize="lg" fontWeight="medium" textAlign="center">
        © 2022 Developed by
        <Link href="https://github.com/Reqvite" isExternal ml={1}>
          Reqvite <ExternalLinkIcon mx="2px" />
        </Link>
      </Text>
    </Box>
  );
};