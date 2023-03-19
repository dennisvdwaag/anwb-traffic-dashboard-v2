import React, { type ChangeEvent, useState, useEffect } from 'react';
import { type Road as RoadType } from '../../../Types/Incidents/types';
import { Input, Text } from '@chakra-ui/react';
import { useMapContext } from '../Context/MapProvider';
import RoadDetail from './RoadDetail';
import Road from './Road';

interface RoadsProps {
    roads?: RoadType[]
}

const Roads: React.FC<RoadsProps> = ({ roads }) => {
    const { state: { activeRoad } } = useMapContext();
    const [filteredRoads, setFilteredRoads] = useState<RoadType[]>();

    useEffect(() => {
        if (roads) {
            setFilteredRoads(roads);
        }
    }, [roads, setFilteredRoads]);

    return (
        <>
            <Input
                variant='unstyled'
                placeholder='Find roads'
                p={3}
                onChange={(e: ChangeEvent<HTMLInputElement>) => { setFilteredRoads(roads?.filter((road) => road.road.toUpperCase().includes(e.target.value.toUpperCase()))); }}
            />
            {filteredRoads && filteredRoads.length > 0
                ? (
                    <>
                        {!activeRoad
                            ? (
                                filteredRoads.map((road) => {
                                    const { jams, roadworks } = road.segments.flatMap(({ jams, roadworks }) => ({ jams, roadworks }))[0];

                                    if (!jams && !roadworks) return <></>;

                                    return <Road key={road.road} road={road} jams={jams} roadworks={roadworks} />;
                                })
                            )
                            : <RoadDetail road={activeRoad} />
                        }
                    </>
                )
                : <Text p={3} fontStyle='italic'>No incidents or roads found...</Text>
            }
        </>
    );
};

export default Roads;
