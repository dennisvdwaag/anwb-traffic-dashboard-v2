import { Box, HStack, UnorderedList, ListItem, Stack, Text, Tag } from '@chakra-ui/react';
import { useGoogleMap } from '@react-google-maps/api';
import React from 'react';
import { formatBounds } from '../../../Functions/format';
import { type Jam } from '../../../Types/Incidents/types';
import { useMapContext } from '../Context/MapProvider';
import { MapDispatchType } from '../Context/MapReducer';

interface JamsProps {
    jams: Jam[]
}

const Jams: React.FC<JamsProps> = ({ jams }) => {
    const { dispatch, state: { activeIncident } } = useMapContext();
    const mapInstance = useGoogleMap();

    console.log(activeIncident);

    return (
        <Stack mt={3}>
            {jams.map((jam) => (
                <Box
                    key={jam.id}
                    p={3}
                    bg='blue.500'
                    color='white'
                    cursor='pointer'
                    _hover={{
                        bg: 'blue.400',
                        transition: 'all 300ms ease',
                    }}
                    onClick={() => {
                        dispatch({ type: MapDispatchType.SET_INCIDENT, activeIncident: jam });
                        if (jam?.bounds && mapInstance) {
                            mapInstance.fitBounds(formatBounds(jam.bounds));
                            const currentZoom = mapInstance.getZoom();

                            if (currentZoom && currentZoom > 16) {
                                mapInstance.setZoom(currentZoom - 1);
                            }
                        }
                    }}
                >
                    <HStack justify='space-between'>
                        <Text>{jam.from} to {jam.to}</Text>
                        <Stack>
                            {jam.distance && <Tag whiteSpace='nowrap'>{jam.distance / 1000 >= 1 ? `${jam.distance / 1000} km` : `${jam.distance} m`}</Tag>}
                            {jam.distance && <Tag whiteSpace='nowrap'>{jam.delay / 60 > 1 ? `${jam.delay / 60} min` : `${jam.delay} sec`}</Tag>}
                        </Stack>
                    </HStack>
                    {activeIncident && activeIncident.id === jam.id && (
                        <Box bg='blue.600' p={3} mt={3}>
                            <UnorderedList>
                                {jam.events.map((event) => (
                                    <ListItem key={event.alertC}>
                                        {event.text}
                                    </ListItem>
                                ))}
                            </UnorderedList>
                        </Box>
                    )}
                </Box>
            ))}
        </Stack>
    );
};

export default Jams;
