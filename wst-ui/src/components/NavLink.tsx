import { HStack, Icon, Text } from '@chakra-ui/react';
import { IconType } from 'react-icons';

import CustomHeaderLink from './CustomLink';

interface NavLinkProps {
  URL: string;
  iconImg: IconType;
  linkName: string;
}

export default function NavLink({ iconImg, linkName, URL }: NavLinkProps) {
  return (
    <CustomHeaderLink to={URL}>
      <HStack spacing={1}>
        <Icon as={iconImg} />
        <Text>{linkName}</Text>
      </HStack>
    </CustomHeaderLink>
  );
}
