import * as XLSX from 'xlsx/';
import { Box, Grid, Input, Text, VStack } from '@chakra-ui/react';

import { LayerStyleVariant } from '../../styles/default/LayerStyle';

export default function SendSample() {
  const handleFile = async (e: any) => {
    const file = e.target.files[0];
    const data = await file.arrayBuffer();
    const workbook = XLSX.read(data);

    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);

    console.log(jsonData);
  };

  return (
    <Grid
      layerStyle={LayerStyleVariant.DEFAULT_PAGE_CONTENT_BOX}
      gridTemplateColumns="1fr 1fr"
      bgColor="#efefef"
      pt={2}
      pb={8}
      px={4}
      borderRadius={4}
    >
      <VStack alignItems="start">
        <Text color="wstBlue.900" fontSize={20} pt={2.5}>
          Enviar amostra:
        </Text>
        <Input type="file" w="80%" onChange={e => handleFile(e)} color="wstBlue.900" borderColor="wstBlue" />
      </VStack>

      <Box>
        <Text color="wstBlue.900" fontSize={20} pt={2.5}>
          Importante!
        </Text>
      </Box>
    </Grid>
  );
}
