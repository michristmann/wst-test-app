import { VStack } from '@chakra-ui/react';

import { Sample } from '../../api/sample/getSamples';
import DropdownContentRow from './DropdownContentRow';

export default function InfoCard(sample: Sample) {
  return (
    <VStack color="wstBlue.900" bgColor="#FFF" py={4} px={12} w="100%" borderBottomRadius={8}>
      <DropdownContentRow label="Cidade" value={sample.cidade} />
      <DropdownContentRow label="Estado" value={sample.estado} />
      <DropdownContentRow label="pH" value={sample.ph} />
      <DropdownContentRow label="Condutividade" value={sample.condutividade} unity="μS/cm" />
      <DropdownContentRow label="Turbidez" value={sample.turbidez} unity="UNT" />
      <DropdownContentRow label="DBO" value={sample.dbo} unity="mg/L" />
      <DropdownContentRow label="DQO" value={sample.dqo} unity="mg/L" />
      <DropdownContentRow label="Ferro" value={sample.fe} unity="mg/L" />
      <DropdownContentRow label="Magnésio" value={sample.mg} unity="mg/L" />
      <DropdownContentRow label="Cálcio" value={sample.ca} unity="mg/L" isLastItem />
    </VStack>
  );
}
