import React, { createContext, useContext, useReducer } from 'react';
import { type MapProviderProps, type MapContextType } from '../../../Types/Map/types';
import { initState, mapReducer } from './MapReducer';

export const MapContext = createContext<MapContextType>({} as unknown as MapContextType);

export const MapProvider: React.FC<MapProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(mapReducer, { ...initState });

    return (
        <MapContext.Provider value={{ dispatch, state }}>
            { children }
        </MapContext.Provider>
    );
};

export const useMapContext: () => MapContextType = () => useContext(MapContext);
