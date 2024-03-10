import { useEffect, useState } from 'react';

type ChangeEvent = React.ChangeEvent<HTMLInputElement>

type Theme = 'light' | 'dark'

type useThemeReturn = [ string, (e: ChangeEvent) => void ];

export const useTheme = (initialTheme:Theme): useThemeReturn => {

    const [theme, setTheme] = useState<Theme>(initialTheme)

    const handleChange = (e: ChangeEvent) => setTheme(e.target.checked ? 'dark' : 'light')

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme])

    return [theme, handleChange]
}