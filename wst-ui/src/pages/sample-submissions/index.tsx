import { Box, Grid, Text, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Sample } from '../../api/sample/getSamples';
import SamplesAPI from '../../api/sample/samples';
import CustomDropdown from '../../components/custom-dropdown.tsx';

import { LayerStyleVariant } from '../../styles/default/LayerStyle';

export default function SampleSubmissions() {
  const [samples, setSamples] = useState<Sample[]>([]);

  useEffect(() => {
    const loadSamples = async () => {
      const savedSamples = await SamplesAPI.getSamples();

      setSamples(savedSamples ?? []);
    };
    loadSamples();
  }, []);

  const datas = samples.map(sample => new Date(sample.createdAt).toLocaleString(undefined, { dateStyle: 'long' }));
  console.log(datas);

  return (
    <Grid
      layerStyle={LayerStyleVariant.DEFAULT_PAGE_CONTENT_BOX}
      gridTemplateColumns="1fr 3fr"
      bgColor="#efefef"
      pt={2}
      pb={8}
      px={4}
      borderRadius={4}
    >
      <Text color="wstBlue.900" fontSize={20} pt={2.5}>
        Amostras enviadas:
      </Text>
      <Box>
        <VStack alignItems="center">
          {samples.map(sample => (
            <CustomDropdown {...sample} key={`sample-id-${sample.id}`} />
          ))}
        </VStack>
      </Box>
    </Grid>
  );
}
