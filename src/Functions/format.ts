import { type LatLng } from '@googlemaps/polyline-codec';
import { type Bounds } from '../Types/Incidents/types';

export const formatPolylinePath = (decodedPolyline: number[][]): LatLng[] => {
    const formattedPolyline: LatLng[] = [];

    decodedPolyline.forEach((latLng) => {
        formattedPolyline.push({ lat: latLng[0], lng: latLng[1] });
    });

    return formattedPolyline;
};

export const formatBounds = (anwbBounds: Bounds): google.maps.LatLngBoundsLiteral => {
    const formattedBounds: google.maps.LatLngBoundsLiteral = {
        north: anwbBounds.northEast.lat,
        east: anwbBounds.northEast.lon,
        south: anwbBounds.southWest.lat,
        west: anwbBounds.southWest.lon,
    };

    return formattedBounds;
};

export const formatDateTime = (date: Date): string => `${new Date(date).toLocaleDateString()} ${new Date(date).toLocaleTimeString()}`;
