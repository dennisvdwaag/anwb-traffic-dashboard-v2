import { type Reducer } from 'react';
import { type Jam, type Road, type Roadwork } from '../../../Types/Incidents/types';

export enum MapDispatchSegment {
    ROADWORKS = 'Roadworks',
    JAMS = 'Jams'
}

export interface MapState {
    activeRoad?: Road
    activeSegment?: MapDispatchSegment
    activeIncident?: Roadwork | Jam
}

export enum MapDispatchType {
    SET_ROAD = 'set_road',
    UNSET_ROAD = 'unset_road',
    SET_SEGMENT = 'set_segment',
    UNSET_SEGMENT = 'unset_segment',
    SET_INCIDENT = 'set_incident',
    UNSET_INCIDENT = 'unset_incident'
}

export interface MapReducerAction {
    type: MapDispatchType
    activeRoad?: Road
    activeSegment?: MapDispatchSegment
    activeIncident?: Roadwork | Jam
}

export const initState: MapState = {
    activeRoad: undefined,
    activeSegment: undefined,
    activeIncident: undefined,
};

export const mapReducer: Reducer<MapState, MapReducerAction> = (state, action) => {
    switch (action.type) {
    case MapDispatchType.SET_ROAD:
        return {
            ...state,
            activeRoad: action.activeRoad,
        };

    case MapDispatchType.UNSET_ROAD:
        return {
            ...state,
            ...initState,
        };

    case MapDispatchType.SET_SEGMENT:
        return {
            ...state,
            activeSegment: action.activeSegment,
        };

    case MapDispatchType.UNSET_SEGMENT:
        return {
            ...state,
            activeSegment: initState.activeSegment,
            activeIncident: initState.activeIncident,
        };

    case MapDispatchType.SET_INCIDENT:
        return {
            ...state,
            activeIncident: action.activeIncident,
        };

    case MapDispatchType.UNSET_INCIDENT:
        return {
            ...state,
            activeIncident: initState.activeIncident,
        };

    default:
        return {
            ...state,
            ...action,
        };
    }
};
