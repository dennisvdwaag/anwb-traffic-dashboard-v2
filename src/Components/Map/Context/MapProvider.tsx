import React, { createContext, type Dispatch, useContext, useReducer } from 'react';
import { initState, mapReducer, type MapReducerAction, type MapState } from './MapReducer';

interface MapContextType {
    dispatch: Dispatch<MapReducerAction>
    state: MapState
}

export const MapContext = createContext<MapContextType>({} as unknown as MapContextType);

interface MapProviderProps {
    children: React.ReactNode
}

export const MapProvider: React.FC<MapProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(mapReducer, { ...initState });

    return (
        <MapContext.Provider value={{ dispatch, state }}>
            { children }
        </MapContext.Provider>
    );
};

export const useMapContext: () => MapContextType = () => useContext(MapContext);
