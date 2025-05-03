import { isValidElement, ReactNode } from "react"

import { Match } from "./Match";
import { OneOrMore } from "./types";
import { isMatchElement, isMatchValidCondition } from "./utils";

export type SwitchProps = {
    children: OneOrMore<typeof Match>
    fallback?: ReactNode;
}

export function Switch({children, fallback}: SwitchProps) {
    try {
        if (!Array.isArray(children)) children = [children];

        const childrenToShow = [];

        for (let i = 0; i < children.length; ++i) {
            const child = children[i];

            if (!isValidElement(child)) {
                continue;
            }
            
            if (isMatchElement(child) && !isMatchValidCondition(child.props.when)) {
                continue;
            }

            childrenToShow.push(child);
        }


        if (childrenToShow.length === 0) {
            return fallback;
        }

        return childrenToShow;
    } catch  {
        return fallback;
    }
}