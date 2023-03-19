import { Box, HStack, UnorderedList, ListItem, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { formatDateTime } from '../../../Functions/format';
import { type Roadwork } from '../../../Types/Incidents/types';
import { MapDispatchType } from '../../../Types/Map/enums';
import { useMapContext } from '../Context/MapProvider';

interface RoadworksProps {
    roadworks: Roadwork[]
}

const Roadworks: React.FC<RoadworksProps> = ({ roadworks }) => {
    const { dispatch, state: { activeIncident } } = useMapContext();

    return (
        <Stack mt={3}>
            {roadworks.map((roadwork) => (
                <Box
                    key={roadwork.id}
                    p={3}
                    bg='blue.500'
                    color='white'
                    cursor='pointer'
                    _hover={{
                        bg: 'blue.400',
                        transition: 'all 300ms ease',
                    }}
                    onClick={() => {
                        dispatch({ type: MapDispatchType.SET_INCIDENT, activeIncident: roadwork });
                    }}
                >
                    <HStack>
                        <Text>{roadwork.from} to {roadwork.to}</Text>
                    </HStack>
                    {activeIncident && activeIncident.id === roadwork.id && (
                        <Box bg='blue.600' p={3} mt={3}>
                            <UnorderedList>
                                {roadwork.events.map((event) => (
                                    <ListItem key={event.alertC}>
                                        {event.text}
                                    </ListItem>
                                ))}
                            </UnorderedList>
                            <HStack>
                                <Text fontWeight='bold'>Start:</Text>
                                <Text>{formatDateTime(roadwork.start)}</Text>
                            </HStack>
                            <HStack>
                                <Text fontWeight='bold'>End:</Text>
                                <Text>{formatDateTime(roadwork.stop)}</Text>
                            </HStack>
                        </Box>
                    )}
                </Box>
            ))}
        </Stack>
    );
};

export default Roadworks;
