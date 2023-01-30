import { extendTheme } from '@chakra-ui/react';

export const defaultTheme = extendTheme({
  colors: {
    inboxPurpleTint: {
      '900': '#8a4776',
      '800': '#955983',
      '700': '#a16b91',
      '600': '#ad7e9f',
      '500': '#b890ac',
      '400': '#c4a3ba',
      '300': '#d0b5c8',
      '200': '#dbc7d5',
      '100': '#e7dae3',
      '50': '#f3ecf1',
    },
    inboxPurpleShade: {
      '900': '#0d070b',
      '800': '#1b0e17',
      '700': '#291523',
      '600': '#371c2f',
      '500': '#45233b',
      '400': '#522a46',
      '300': '#603152',
      '200': '#6e385e',
      '100': '#7c3f6a',
    },
    inboxBlueTint: {
      '900': '#07789b',
      '800': '#1f85a5',
      '700': '#3893af',
      '600': '#51a0b9',
      '500': '#6aaec3',
      '400': '#83bbcd',
      '300': '#9bc9d7',
      '200': '#b4d6e1',
      '100': '#cde4eb',
      '50': '#e6f1f5',
    },
    inboxBlueShade: {
      '900': '#000c0f',
      '800': '#01181f',
      '700': '#02242e',
      '600': '#02303e',
      '500': '#033c4d',
      '400': '#04485d',
      '300': '#04546c',
      '200': '#05607c',
      '100': '#066c8b',
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
        bg: '#efefef',
        color: 'inboxPurpleTint.900',
        h: '100vh',
      },
      html: { h: '100vh' },
    },
  },
});
