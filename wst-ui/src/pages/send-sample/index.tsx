import * as XLSX from 'xlsx/';
import { Box, Button, Grid, HStack, Input, UnorderedList, Text, VStack, ListItem } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import { LayerStyleVariant } from '../../styles/default/LayerStyle';
import SamplesAPI from '../../api/sample/samples';
import { SampleProps } from '../../api/sample/createSample';
import { useState } from 'react';

export default function SendSample() {
  const [fileData, setFileData] = useState<SampleProps>();
  const { handleSubmit } = useForm();

  const handleFile = async (e: any) => {
    const file = e.target.files[0];
    const data = await file.arrayBuffer();
    const workbook = XLSX.read(data);

    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);

    setFileData(jsonData[0] as SampleProps);
  };

  const onFormSubmit = async () => {
    await SamplesAPI.createSample(fileData!);
  };

  return (
    <Grid
      layerStyle={LayerStyleVariant.DEFAULT_PAGE_CONTENT_BOX}
      gridTemplateColumns="1fr 1fr"
      gridColumnGap={8}
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
        <HStack as="form" onSubmit={handleSubmit(onFormSubmit)} spacing={2} alignItems="center" w="100%">
          <Input pt={1} type="file" w="100%" onChange={e => handleFile(e)} color="wstBlue.900" borderColor="wstBlue" />
          <Button bgColor="wstBlue.900" type="submit">
            Enviar
          </Button>
        </HStack>
        {/* {submitSuccess && (
          <Alert
            status="success"
            variant="subtle"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            height="200px"
            border="1px"
            borderColor="#38a169"
            borderRadius={8}
          >
            <AlertIcon boxSize="40px" mr={0} />
            <AlertTitle mt={4} mb={1} fontSize="lg" color="#2D3748">
              Envio Realizado com sucesso!
            </AlertTitle>
          </Alert>
        )} */}
      </VStack>

      <Box color="wstBlue.900" fontSize={20} pt={2.5}>
        <Text mb={4}>Os parâmetros que devem ser enviados e seus respectivos valores são:</Text>
        <UnorderedList fontSize={18} ml={12} mb={2}>
          <ListItem>Cidade - local da amostragem</ListItem>
          <ListItem>Estado - sigla do Estado da amostragem</ListItem>
          <ListItem>pH - pH da amostra</ListItem>
          <ListItem>Condutividade - Condutividade da amostra</ListItem>
          <ListItem>Turbidez - Turbidez da amostra</ListItem>
          <ListItem>DBO - Demanda Bioquímica de Oxigênio da amostra</ListItem>
          <ListItem>DQO - Demanda Química de Oxigênio da amostra</ListItem>
          <ListItem>Fe - Concentração de Ferro da amostra</ListItem>
          <ListItem>Mg - Concentração de Magnésio da amostra</ListItem>
          <ListItem>Ca - Concentração de Cálcio da amostra</ListItem>
        </UnorderedList>
        <Text fontSize={14}>
          Obs.: Os parâmetros devem ser dispostos na primeira linha da tabela e seus respectivos valores na segunda.
        </Text>
      </Box>
    </Grid>
  );
}
