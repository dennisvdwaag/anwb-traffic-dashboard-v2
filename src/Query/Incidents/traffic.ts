import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import { isIncident } from '../../Types/Incidents/typeguards';
import { type Incidents } from '../../Types/Incidents/types';
import { type Potential } from '../../Types/types';
import { assertValidResponse } from '../query';
import createRequest, { createRequestInput } from '../request';

const fetchKeyIncidents = 'incidents';

const fetchIncidents = async (signal?: AbortSignal): Promise<Incidents> => {
    const response = await createRequest(createRequestInput('/v2/incidents', new URLSearchParams({ apikey: import.meta.env.VITE_ANWB_API_KEY })), { signal });

    if (!response.ok) {
        throw Error('Something went wrong...');
    }

    const responseData = await response.json() as Potential<Incidents>;
    assertValidResponse(responseData, isIncident);

    return responseData;
};

export const useIncidents = (): UseQueryResult<Incidents, Error> => useQuery([fetchKeyIncidents], async ({ signal }) => await fetchIncidents(signal), { retry: false });
