import { Grid, GridItem } from '@chakra-ui/react';

interface DropdwonContentRowProps {
  label: string;
  value: number | string;
  unity?: string;
  isLastItem?: boolean;
}

export default function DropdownContentRow({ label, value, unity, isLastItem }: DropdwonContentRowProps) {
  return (
    <Grid
      gridTemplateColumns="2fr 1fr 1fr"
      gridRowGap={2}
      w="100%"
      borderBottom={isLastItem ? '0px' : '1px'}
      borderColor="#efefef"
    >
      <GridItem>{`${label}:`}</GridItem>
      <GridItem colSpan={typeof value === 'string' ? 2 : 1}>{value}</GridItem>
      {!!unity && <GridItem textAlign="start">{unity}</GridItem>}
    </Grid>
  );
}
