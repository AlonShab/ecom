import {ReactNode} from "react";

export interface ErrorBoundariesProps {
    fallback: ReactNode;
    children: ReactNode;
}

export interface ErrorBoundariesState {
    hasError: boolean;
}
