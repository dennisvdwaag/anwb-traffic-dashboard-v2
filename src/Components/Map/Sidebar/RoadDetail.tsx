import { Box, Button, Heading, HStack } from '@chakra-ui/react';
import { useGoogleMap } from '@react-google-maps/api';
import React from 'react';
import { type Road } from '../../../Types/Incidents/types';
import { useMapContext } from '../Context/MapProvider';
import { MapDispatchType, MapDispatchSegment } from '../Context/MapReducer';
import { centerNetherlands } from '../Map';
import Jams from './Jams';
import Roadworks from './Roadworks';

interface RoadDetailProps {
    road: Road
}

const RoadDetail: React.FC<RoadDetailProps> = ({ road }) => {
    const { dispatch, state: { activeSegment } } = useMapContext();
    const { jams, roadworks } = road.segments.flatMap(({ jams, roadworks }) => ({ jams, roadworks }))[0];
    const mapInstance = useGoogleMap();

    return (
        <Box p={5}>
            <HStack justify='space-between'>
                <Heading as='h2' size='md'>{road.road} {activeSegment && `(${activeSegment})`}</Heading>
                <Button
                    onClick={() => {
                        dispatch({ type: activeSegment ? MapDispatchType.UNSET_SEGMENT : MapDispatchType.UNSET_ROAD });
                        mapInstance?.setCenter(centerNetherlands);
                        mapInstance?.setZoom(8.4);
                    } }
                >
                    Back {activeSegment ? 'to segments' : 'to roads'}
                </Button>
            </HStack>
            {!activeSegment
                ? (
                    <HStack mt={5}>
                        <Button
                            colorScheme='blue'
                            onClick={() => {
                                dispatch({ type: MapDispatchType.SET_SEGMENT, activeSegment: MapDispatchSegment.JAMS });
                            }}
                            isDisabled={!jams}
                        >
                            View traffic jams ({ jams ? jams.length : 0 })
                        </Button>
                        <Button
                            colorScheme='blue'
                            onClick={() => {
                                dispatch({ type: MapDispatchType.SET_SEGMENT, activeSegment: MapDispatchSegment.ROADWORKS });
                            }}
                            isDisabled={!roadworks}
                        >
                            Roadworks ({ roadworks ? roadworks.length : 0 })
                        </Button>
                    </HStack>
                )
                : (
                    <>
                        {activeSegment === MapDispatchSegment.JAMS && jams && (
                            <Jams jams={jams} />
                        )}
                        {activeSegment === MapDispatchSegment.ROADWORKS && roadworks && (
                            <Roadworks roadworks={roadworks} />
                        )}
                    </>
                )}
        </Box>
    );
};

export default RoadDetail;
