import { ReactNode } from "react";
import { BoolOrFn } from "./types";

export type MatchProps = {
    children: ReactNode;
    when: BoolOrFn;
}

export function Match({ children }: MatchProps) {
    return children
}
