import { Text } from '@chakra-ui/react';

export default function Logo() {
  return (
    <Text fontSize={['1xl', '2xl']} fontWeight="bold" letterSpacing="tight" color="inboxBlueTint.900" w={64}>
      in
      <Text
        fontSize={['2xl', '3xl']}
        as="span"
        letterSpacing="tight"
        bgColor="inboxPurpleTint.900"
        color="#efefef"
        px={2}
        borderRadius={4}
        ml={0.5}
      >
        BOX
      </Text>
    </Text>
  );
}
