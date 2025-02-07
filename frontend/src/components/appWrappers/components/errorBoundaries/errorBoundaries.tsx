import react, {Component} from 'react';
import {ErrorBoundariesProps, ErrorBoundariesState} from "./errorBoundariesProps";

export class ErrorBoundaries extends Component<ErrorBoundariesProps, ErrorBoundariesState> {
    constructor(props: ErrorBoundariesProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: { componentStack: string }) {
        console.error(error, info.componentStack);
    }


    render() {
        if (this.state.hasError) {
            return this.props.fallback;
        }

        return this.props.children;
    }
}