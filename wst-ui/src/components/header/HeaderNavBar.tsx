import { HStack } from '@chakra-ui/react';
import { BiCog, BiHome } from 'react-icons/bi';

import NavLink from '../NavLink';

export default function NavBar() {
  return (
    <HStack spacing={9} justifyContent="start">
      <NavLink URL="/home" linkName="Home" iconImg={BiHome} />
      <NavLink URL="/send-sample" linkName="Enviar amostra" iconImg={BiCog} />
    </HStack>
  );
}
