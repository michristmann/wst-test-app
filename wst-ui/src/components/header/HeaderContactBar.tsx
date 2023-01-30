import { Flex, Icon, HStack, Text } from '@chakra-ui/react';
import { BiPhone } from 'react-icons/bi';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function HeaderContactBar() {
  return (
    <Flex bgColor="wstBlue.900" justifyContent="center">
      <Flex width="1252px" py={2}>
        <Flex alignItems="center" w="100%">
          <Icon as={BiPhone} mr={1} />
          <Text>+55(48)3365-4374 / +55(31)2526-7847</Text>
        </Flex>
        <HStack spacing={4} justifyContent="end">
          <Link to="https://www.facebook.com/waterservicestech/" target="_blank">
            <Icon as={FaFacebook} boxSize={5} mb={-1} />
          </Link>
          <Link to="https://www.instagram.com/waterservicestech/" target="_blank">
            <Icon as={FaInstagram} boxSize={5} mb={-1} />
          </Link>
          <Link to="https://www.linkedin.com/company/water-services-and-technologies/" target="_blank">
            <Icon as={FaLinkedin} boxSize={5} mb={-1} />
          </Link>
          <Link to="https://www.youtube.com/channel/UCopCFaeT2OlFTjcmB5y1gig" target="_blank">
            <Icon as={FaYoutube} boxSize={5} mb={-1} />
          </Link>
        </HStack>
      </Flex>
    </Flex>
  );
}
