export type Potential<T> = undefined | null | boolean | number | string | unknown[] | {
    [P in keyof T]?: Potential<T[P]>;
};

export type Modify<T, R> = Omit<T, keyof R> & R;
