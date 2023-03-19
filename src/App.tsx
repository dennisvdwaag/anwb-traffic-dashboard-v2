import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './Theme/theme';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './Query/queryClient';
import Incidents from './Components/Pages/Incidents';

const App: React.FC = () => (
    <ChakraProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
            <Incidents />
        </QueryClientProvider>
    </ChakraProvider>
);

export default App;
