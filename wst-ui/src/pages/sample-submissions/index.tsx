import { Box, Grid, Text, VStack } from '@chakra-ui/react';
import CustomDropdown from '../../components/custom-dropdown.tsx';
import { mockdata } from '../../components/custom-dropdown.tsx/mockdata';

import { LayerStyleVariant } from '../../styles/default/LayerStyle';

export default function SampleSubmissions() {
  const data = mockdata;

  return (
    <Grid
      layerStyle={LayerStyleVariant.DEFAULT_PAGE_CONTENT_BOX}
      gridTemplateColumns="1fr 3fr"
      bgColor="#efefef"
      pt={2}
      pb={8}
      px={4}
    >
      <Text color="wstBlue.900" fontSize={20} pt={2.5}>
        Amostras enviadas:
      </Text>
      <Box>
        <VStack alignItems="center">
          {data.map(sample => (
            <CustomDropdown {...sample} />
          ))}
        </VStack>
      </Box>
    </Grid>
  );
}
