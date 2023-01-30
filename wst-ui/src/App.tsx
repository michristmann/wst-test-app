import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { defaultTheme } from './styles/default';

function App() {
  return (
    <ChakraProvider theme={defaultTheme}>
      <h1>Hello World!!</h1>
    </ChakraProvider>
  );
}

export default App;
