import { isArray, isObject } from '../typeguards';
import { type Potential } from '../types';
import { type Incidents, type Road } from './types';

export const isIncident = (incidentToCheck: Potential<Incidents>): incidentToCheck is Incidents => (
    isObject(incidentToCheck) && (
        typeof incidentToCheck?.copyright === 'string' &&
        (
            isArray<Road>(incidentToCheck?.roads) &&
            Boolean(incidentToCheck?.roads?.every(isRoad))
        )
    )
);

const isRoad = (roadToCheck: Potential<Road>): roadToCheck is Road => (
    isObject(roadToCheck) && (
        typeof roadToCheck?.road === 'string' &&
        typeof roadToCheck?.type === 'string'
    )
);
