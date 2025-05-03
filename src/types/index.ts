import { ReactElement } from "react";

export type OneOrMore<T> = ReactElement<T> | ReactElement<T>[];
export type BoolOrFn = boolean | (() => boolean);