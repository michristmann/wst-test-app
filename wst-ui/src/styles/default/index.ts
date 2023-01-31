import { extendTheme } from '@chakra-ui/react';
import { LayerStyles } from './LayerStyle';

export const defaultTheme = extendTheme({
  layerStyles: LayerStyles,

  colors: {
    wstBlue: {
      '900': '#0d568a',
      '800': '#6EC1E4',
    },
  },
  fonts: {
    body: 'Poppins',
    heading: 'Poppins',
  },
  styles: {
    global: {
      '#root': { h: '100vh', display: 'flex', flexDirection: 'column' },
      body: {
        bg: '#FFFFFF',
        color: '#FFFFFF',
        h: '100vh',
      },
      html: { h: '100vh' },
    },
  },
});
