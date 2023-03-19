import React from 'react';
import { type Jam, type Roadwork, type Road as RoadType } from '../../../Types/Incidents/types';
import { Box, Heading, HStack, Tag, Text, Tooltip } from '@chakra-ui/react';
import TrafficIcon from '../../../Theme/Icons/TrafficIcon';
import ConstrustionIcon from '../../../Theme/Icons/ConstructionIcon';
import { useMapContext } from '../Context/MapProvider';
import { MapDispatchType } from '../../../Types/Map/enums';

interface RoadProps {
    road: RoadType
    jams?: Jam[]
    roadworks?: Roadwork[]
}

const Road: React.FC<RoadProps> = ({ road, jams, roadworks }) => {
    const { dispatch } = useMapContext();

    return (
        <Box
            p={3}
            borderBottom='1px solid'
            borderColor='gray.200'
            cursor='pointer'
            onClick={() => {
                dispatch({ type: MapDispatchType.SET_ROAD, activeRoad: road });
            }}
            _hover={{
                bg: 'gray.100',
                transition: 'all 300ms ease',
            }}
        >
            <HStack justify='space-between'>
                <Heading as='h2' size='md'>{road.road}</Heading>
                <HStack>
                    <Tooltip label='Traffic jams' placement='top' hasArrow>
                        <Tag color='black' colorScheme='red'>
                            <Text mr={1}>{jams ? jams.length : 0}</Text>
                            <TrafficIcon />
                        </Tag>
                    </Tooltip>
                    <Tooltip label='Roadworks' placement='top' hasArrow>
                        <Tag color='black' colorScheme='yellow'>
                            <Text mr={1}>{roadworks ? roadworks.length : 0}</Text>
                            <ConstrustionIcon />
                        </Tag>
                    </Tooltip>
                </HStack>
            </HStack>
        </Box>
    );
};

export default Road;
