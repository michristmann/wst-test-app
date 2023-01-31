import { HStack } from '@chakra-ui/react';

import NavLink from '../NavLink';

export default function NavBar() {
  return (
    <HStack spacing={9} justifyContent="start">
      <NavLink URL="/sample-submissions" linkName="Envios" />
      <NavLink URL="/send-sample" linkName="Enviar" />
    </HStack>
  );
}
