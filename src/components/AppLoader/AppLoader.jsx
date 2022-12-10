import { Flex } from '@chakra-ui/react';
import { InfinitySpin } from 'react-loader-spinner';

export const AppLoader = ({ h }) => {
  return (
    <Flex justifyContent="center" alignItems="center" h={h}>
      <InfinitySpin width="200" color="#0078FF" />
    </Flex>
  );
};
