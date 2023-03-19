import { type Potential } from '../Types/types';

export function assertValidResponse<T> (response: Potential<T>, typeguard: (value: Potential<T>) => boolean): asserts response is T {
    if (!typeguard(response)) {
        throw new Error('Unexpected response');
    }
}
