import { Box, Text } from '@chakra-ui/react';

export const Footer = () => {
  return (
    <Box as="footer" bg="#2D3748" w="100%" p={3}>
      <Text fontSize="lg" fontWeight="medium" textAlign="center">
        © 2022 Developed by Reqvite
      </Text>
    </Box>
  );
};
