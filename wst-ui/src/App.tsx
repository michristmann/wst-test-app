import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import Header from './components/header';
import Routes from './routes';
import { defaultTheme } from './styles/default';

function App() {
  return (
    <ChakraProvider theme={defaultTheme}>
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
