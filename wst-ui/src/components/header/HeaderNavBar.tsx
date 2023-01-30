import { HStack } from '@chakra-ui/react';

import NavLink from '../NavLink';

export default function NavBar() {
  return (
    <HStack spacing={9} justifyContent="start">
      <NavLink URL="/home" linkName="Home" />
      <NavLink URL="/send-sample" linkName="Enviar amostra" />
    </HStack>
  );
}
