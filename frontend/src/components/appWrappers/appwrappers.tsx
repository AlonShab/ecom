import react, { FC } from 'react';
import { AppWrappersProps } from './appWrappersProps';
import { ThemeAndStyle } from './components/themeAndStyle/themeAndStyle';
import { ErrorBoundaries } from './components/errorBoundaries/errorBoundaries';

export const WithAppWrappers: FC<AppWrappersProps> = ({ children}) => {
    return (
        <ErrorBoundaries fallback={<h1>Error has occurred</h1>}>
            <ThemeAndStyle>
                {children}
            </ThemeAndStyle>
        </ErrorBoundaries>
    )
}