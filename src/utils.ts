import { isValidElement, ReactElement, ReactNode } from "react";

import { BoolOrFn } from "./types";
import { Match, MatchProps } from "./Match";

export function isMatchElement(element: ReactNode): element is ReactElement<MatchProps, typeof Match> {
    return (
        isValidElement(element) &&
        element.type === Match &&
        "when" in (element.props as MatchProps)
    );
}

export function isMatchValidCondition(condition: BoolOrFn) {
    try {
        if (condition === undefined || condition === null) {
            return false;
        }

        if (typeof condition === "function") {
            return condition();
        }

        return !!condition;
    } catch {
        return false;
    }
}
