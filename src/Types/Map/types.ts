import { type Dispatch } from 'react';
import type React from 'react';
import { type Jam, type Road, type Roadwork } from '../Incidents/types';
import { type MapDispatchType, type MapDispatchSegment } from './enums';

export interface MapState {
    activeRoad?: Road
    activeSegment?: MapDispatchSegment
    activeIncident?: Roadwork | Jam
}

export interface MapReducerAction {
    type: MapDispatchType
    activeRoad?: Road
    activeSegment?: MapDispatchSegment
    activeIncident?: Roadwork | Jam
}

export interface MapContextType {
    dispatch: Dispatch<MapReducerAction>
    state: MapState
}

export interface MapProviderProps {
    children: React.ReactNode
}
