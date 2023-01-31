import { Flex, useDisclosure } from '@chakra-ui/react';
import DropdownTitleRow from './DropdownTitleRow';
import InfoCard from './InfoCard';

export interface SampleProps {
  id: number;
  city: string;
  state: string;
  ph: number;
  conductivity: number;
  turbidity: number;
  dbo: number;
  dqo: number;
  fe: number;
  mg: number;
  ca: number;
}

export default function CustomDropdown(sample: SampleProps) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Flex direction="column" w="100%" key={`sample-id-${sample.id}`} ml={0}>
      <DropdownTitleRow isOpen={isOpen} onToggle={onToggle} rowTitle={`Amostra nº: ${sample.id}`} />
      {isOpen && <InfoCard {...sample} />}
    </Flex>
  );
}
