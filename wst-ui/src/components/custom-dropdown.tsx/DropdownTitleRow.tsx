import { Flex, Text } from '@chakra-ui/react';

import { ReactComponent as ChevronDownIcon } from '../../assets/chevron-down.svg';
import { ReactComponent as ChevronRightIcon } from '../../assets/chevron-right.svg';

interface DropdownRowProps {
  rowTitle: string;
  submissionDate: string;
  isOpen: boolean;
  onToggle: () => void;
}

export default function DropdownRow({ rowTitle, isOpen, submissionDate, onToggle }: DropdownRowProps) {
  return (
    <Flex
      width="100%"
      bgColor="#fff"
      alignItems="center"
      justifyContent="space-between"
      borderTopRadius={8}
      borderBottomRadius={isOpen ? 0 : 8}
    >
      <Flex alignItems="center" cursor="pointer" h="52px" onClick={onToggle} userSelect="none">
        <Flex mx={4} h={5} w={5} justifyContent=" center">
          {isOpen ? (
            <ChevronDownIcon width={20} height={20} fill="wstBlue.900" />
          ) : (
            <ChevronRightIcon width={20} height={20} fill="wstBlue.900" />
          )}
        </Flex>
        <Text fontSize={14} fontWeight={600} color="wstBlue.900">
          {rowTitle}
        </Text>
      </Flex>
      <Text mr={5} fontSize={14} fontWeight={600} color="wstBlue.900">
        {`Enviada em: ${submissionDate}`}
      </Text>
    </Flex>
  );
}
