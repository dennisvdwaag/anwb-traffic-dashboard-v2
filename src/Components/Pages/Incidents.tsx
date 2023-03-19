import React from 'react';
import { MapProvider } from '../Map/Context/MapProvider';
import Map from '../Map/Map';

const Incidents: React.FC = () => (
    <MapProvider>
        <Map />
    </MapProvider>
);

export default Incidents;
