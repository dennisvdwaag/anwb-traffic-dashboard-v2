import { type Reducer } from 'react';
import { MapDispatchType } from '../../../Types/Map/enums';
import { type MapReducerAction, type MapState } from '../../../Types/Map/types';

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
