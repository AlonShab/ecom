import react, { FC } from 'react';
import {ThemeProvider, createGlobalStyle} from "styled-components";
import theme from '../../../../theme/baseTheme';
import {ThemeAndStyleProps} from "./themeAndStyleProps";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: ${({theme}) => theme.fonts.primary};
        background-color: ${({theme}) => theme.colors.background};
        color: ${({theme}) => theme.colors.text.primary};
    }
`;

export const ThemeAndStyle: FC<ThemeAndStyleProps> = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            {children}
        </ThemeProvider>
    )
}