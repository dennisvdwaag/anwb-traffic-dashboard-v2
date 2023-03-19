import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppLayout from './Components/Layout/AppLayout';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './Theme/theme';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './Query/queryClient';

const App: React.FC = () => (
    <ChakraProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <AppLayout />
            </BrowserRouter>
        </QueryClientProvider>
    </ChakraProvider>
);

export default App;
