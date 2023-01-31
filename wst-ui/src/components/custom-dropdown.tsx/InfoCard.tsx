import { VStack } from '@chakra-ui/react';
import DropdownContentRow from './DropdownContentRow';

import { SampleProps } from '.';

export default function InfoCard(sample: SampleProps) {
  return (
    <VStack color="wstBlue.900" bgColor="#FFF" py={2} px={4} w="100%">
      <DropdownContentRow label="Cidade" value={sample.city} />
      <DropdownContentRow label="Estado" value={sample.state} />
      <DropdownContentRow label="pH" value={sample.ph} />
      <DropdownContentRow label="Condutividade" value={sample.conductivity} unity="μS/cm" />
      <DropdownContentRow label="Turbidez" value={sample.turbidity} unity="UNT" />
      <DropdownContentRow label="DBO" value={sample.dbo} unity="mg de O/L" />
      <DropdownContentRow label="DQO" value={sample.dqo} unity="mg de O/L" />
      <DropdownContentRow label="Ferro" value={sample.fe} unity="mg/L" />
      <DropdownContentRow label="Manganês" value={sample.mg} unity="mg/L" />
      <DropdownContentRow label="Cálcio" value={sample.ca} unity="mg/L" isLastItem />
    </VStack>
  );
}
