import { Flex, Box, Avatar, Text, Link } from '@chakra-ui/react';

interface ProfileProps {
  isLoggedIn: boolean;
}

export default function Profile({ isLoggedIn }: ProfileProps) {
  return isLoggedIn ? (
    <Flex placeSelf="end">
      <Box mr={4} textAlign="right">
        <Text color="inboxBlueTint.900">Michael Christmann</Text>
        <Text color="inboxBlueTint.700" fontSize="small">
          michristmann@hotmail.com
        </Text>
      </Box>
      <Avatar size="md" name="Michael Christmann" bgColor="inboxPurpleTint.900" color="#efefef" />
    </Flex>
  ) : (
    <Link href="/login" placeSelf="end">
      Login
    </Link>
  );
}
