import { Box } from '@chakra-ui/react';
import React from 'react';
import RouteResolver from '../RouteResolver/RouteResolver';

const AppLayout: React.FC = () => (
    <Box>
        <RouteResolver />
    </Box>
);

export default AppLayout;
