import { Box, Grid } from '@chakra-ui/react';

import { LayerStyleVariant } from '../../styles/default/LayerStyle';

export default function Home() {
  return (
    <Grid gridTemplateColumns="1fr 1fr" layerStyle={LayerStyleVariant.DEFAULT_PAGE_CONTENT_BOX}>
      <Box bgColor="red" h="100%" />
    </Grid>
  );
}
