import { HStack, Text } from '@chakra-ui/react';

import CustomHeaderLink from './CustomLink';

interface NavLinkProps {
  URL: string;
  linkName: string;
}

export default function NavLink({ linkName, URL }: NavLinkProps) {
  return (
    <CustomHeaderLink to={URL}>
      <HStack spacing={1}>
        <Text>{linkName}</Text>
      </HStack>
    </CustomHeaderLink>
  );
}
