import { Flex, Text } from '@chakra-ui/react';

import { ReactComponent as ChevronDownIcon } from '../../assets/chevron-down.svg';
import { ReactComponent as ChevronRightIcon } from '../../assets/chevron-right.svg';

interface DropdownRowProps {
  rowTitle: string;
  isOpen: boolean;
  onToggle: () => void;
}

export default function DropdownRow({ rowTitle, isOpen, onToggle }: DropdownRowProps) {
  return (
    <Flex direction="column" width="100%" bgColor="#fff" borderTopRadius={8} borderBottomRadius={isOpen ? 0 : 8}>
      <Flex alignItems="center" cursor="pointer" h="52px" onClick={onToggle} userSelect="none">
        <Flex mx={4} h={5} w={5} alignItems="center" justifyContent=" center">
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
    </Flex>
  );
}
