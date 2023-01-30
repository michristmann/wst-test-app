import { Flex, Grid, Image } from '@chakra-ui/react';

import NavBar from './HeaderNavBar';
import Logo from '../../assets/WSTLogo.png';
import HeaderContactBar from './HeaderContactBar';

export default function Header() {
  return (
    <Flex flexDir="column">
      <HeaderContactBar />
      <Flex bgColor="#FFFFFF" justifyContent="center" w="100%">
        <Grid
          gridTemplateColumns="1fr 2fr"
          maxWidth="1252px"
          w="100%"
          py={4}
          alignItems="center"
          color="#FFFFFF"
          fontSize="18px"
        >
          <Image src={Logo} />
          <NavBar />
        </Grid>
      </Flex>
    </Flex>
  );
}
