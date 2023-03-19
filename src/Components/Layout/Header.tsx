import { Box, Container } from '@chakra-ui/react';
import React from 'react';

const Header: React.FC = () => (
    <Box h='80px' w='100vw' pos='fixed'>
        <Container maxW='container.xl'>
            Header
        </Container>
    </Box>
);

export default Header;
