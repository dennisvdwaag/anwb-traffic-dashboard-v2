import { Box } from '@chakra-ui/react';
import React from 'react';
import { type Road as RoadType } from '../../../Types/Incidents/types';
import Roads from './Roads';

interface SidebarProps {
    roads?: RoadType[]
}

const Sidebar: React.FC<SidebarProps> = ({ roads }) => (
    <Box
        h='80vh'
        w='500px'
        bg='white'
        mt='10vh'
        ml='5vw'
        pos='fixed'
        zIndex={1}
        borderRadius='md'
        border='1px solid'
        borderColor='gray.200'
        overflowX='scroll'
    >
        <Roads roads={roads} />
    </Box>
);

export default Sidebar;
