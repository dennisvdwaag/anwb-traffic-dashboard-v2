import { GoogleMap, LoadScript, Polyline } from '@react-google-maps/api';
import React from 'react';
import { useMapContext } from './Context/MapProvider';
import { decode } from '@googlemaps/polyline-codec';
import { formatPolylinePath } from '../../Functions/format';
import Sidebar from './Sidebar/Sidebar';
import { useIncidents } from '../../Query/Incidents/traffic';
import { MapDispatchSegment } from '../../Types/Map/enums';

export const centerNetherlands = {
    lat: 52.2130,
    lng: 4.2794,
};

const Map: React.FC = () => {
    const { data: incidents } = useIncidents();
    const { state: { activeSegment, activeIncident } } = useMapContext();

    return (
        <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
            <GoogleMap
                mapContainerStyle={{
                    width: '100vw',
                    height: '100vh',
                    position: 'fixed',
                }}
                center={centerNetherlands}
                zoom={8.4}
                options={{
                    minZoom: 8.4,
                }}
            >
                {activeIncident?.polyline && (
                    <Polyline
                        options={{ strokeColor: activeSegment && activeSegment === MapDispatchSegment.JAMS ? 'red' : 'yellow' }}
                        path={formatPolylinePath(decode(activeIncident.polyline))}
                    />
                )}
                <Sidebar roads={incidents?.roads} />
            </GoogleMap>
        </LoadScript>
    );
};

export default Map;
