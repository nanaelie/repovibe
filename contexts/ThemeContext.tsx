import React, { createContext, useContext, useState, ReactNode } from 'react';

type Theme = 'Clair' | 'Sombre';

interface Colors {
  background: string;
  text: string;
  cardBackground: string;
  // Ajoute d'autres couleurs si besoin
}

interface ThemeContextType {
  theme: Theme;
  colors: Colors;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'Clair',
  colors: {
    background: '#ffffff',
    text: '#000000',
    cardBackground: '#f0f0f0',
  },
  toggleTheme: () => {},
});

const lightColors: Colors = {
  background: '#ffffff',
  text: '#000000',
  cardBackground: '#f0f0f0',
};

const darkColors: Colors = {
  background: '#121212',
  text: '#ffffff',
  cardBackground: '#1f1f1f',
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('Sombre');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'Clair' ? 'Sombre' : 'Clair'));
  };

  const colors = theme === 'Clair' ? lightColors : darkColors;

  return (
    <ThemeContext.Provider value={{ theme, colors, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

