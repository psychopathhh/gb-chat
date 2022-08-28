import { createContext, useCallback, useState } from "react";
const defaultValue = 'default value'

export const ThemeContext = createContext(defaultValue)

const themes = {
    dark: {
        primary: '#264e41',
        secondary: '#2e2e2e',
        contrastText: '#fff',
        bgChat: '#100f0f',
        bgChatList: '#1a1919'
    },
    light: {
        primary: '#B1C5A0',
        secondary: '#fff',
        contrastText: '#000',
        bgChat: '#E2D9D0',
        bgChatList: '#e7e4e4'
    }
}

export const CustomThemeProvider = ({ children, initialTheme = 'light' }) => {
    const [theme, setTheme] = useState({
        name: initialTheme,
        theme: themes[initialTheme]
    })
    const themeSetter = useCallback((name) => {
        if (themes[name]) {
            setTheme({
                name: name,
                theme: themes[name]
            })
        }
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, themeSetter }}>{children}</ThemeContext.Provider>
    )
}