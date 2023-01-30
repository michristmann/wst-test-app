import { Flex, Grid } from '@chakra-ui/react';

import NavBar from './HeaderNavBar';
import Logo from './Logo';
import Profile from './Profile';

export default function Header() {
  return (
    <Flex bgColor="inboxBlueTint.100" justifyContent="center" position="fixed" w="100%" zIndex="99">
      <Grid
        gridTemplateColumns="1fr 2fr 2fr"
        maxWidth="1252px"
        w="100%"
        py={6}
        alignItems="center"
        color="inboxBlueTint.900"
        fontSize="18px"
      >
        <Logo />
        <NavBar />
        <Profile isLoggedIn={true} />
      </Grid>
    </Flex>
  );
}
