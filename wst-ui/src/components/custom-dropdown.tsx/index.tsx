import { Flex, useDisclosure } from '@chakra-ui/react';

import DropdownTitleRow from './DropdownTitleRow';
import { Sample } from '../../api/sample/getSamples';
import InfoCard from './InfoCard';
import { DateConverter } from '../../utils/dateConverter';

export default function CustomDropdown(sample: Sample) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Flex direction="column" w="100%" key={`sample-id-${sample.id}`} ml={0}>
      <DropdownTitleRow
        isOpen={isOpen}
        onToggle={onToggle}
        rowTitle={`Amostra: ${sample.cidade}, ${sample.estado}`}
        submissionDate={DateConverter(sample.createdAt)}
      />
      {isOpen && <InfoCard {...sample} />}
    </Flex>
  );
}
