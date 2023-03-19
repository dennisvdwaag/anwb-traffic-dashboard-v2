export const isArray = <Entry>(value: unknown): value is Entry[] | never[] => Array.isArray(value);
export const isObject = (value: unknown): value is Record<string, unknown | never> => typeof value === 'object' && value !== null && !isArray(value);
