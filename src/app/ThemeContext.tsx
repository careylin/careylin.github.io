'use client'

import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ChangeEvent } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => 
    setTheme(e.target.checked ? 'dark' : 'light');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, handleChange }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
} 