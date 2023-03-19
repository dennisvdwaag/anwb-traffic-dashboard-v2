const createRequest = async (input: RequestInfo, init: RequestInit = {}): Promise<Response> => {
    const headers = new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
    });

    return await fetch(input, { ...init, headers });
};

export const createRequestInput = (input: string, searchParams?: URLSearchParams): string => (searchParams ? input.concat(`?${searchParams.toString()}`) : input);

export default createRequest;
