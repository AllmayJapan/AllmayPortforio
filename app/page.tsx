import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#d32f2f',
        },
    },
});

export default function Page({ Component, pageProps }: { Component: React.ElementType; pageProps: any }) {
    return (
        <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div style={{ position: 'relative', zIndex: 1 }}>
                    <Component {...pageProps} />
                </div>
            </ThemeProvider>
        </div>
    );
}
