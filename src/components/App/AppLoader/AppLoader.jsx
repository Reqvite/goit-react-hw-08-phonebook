import { Flex } from '@chakra-ui/react';
import { InfinitySpin } from 'react-loader-spinner';

export const AppLoader = () => {
  return (
    <Flex justifyContent="center" alignItems="center" h="100vh">
      <InfinitySpin width="200" color="#0078FF" />
    </Flex>
  );
};
