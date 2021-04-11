import { useState, createContext, useContext} from 'react';

export const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export default function ThemeProvider({ children }) {
  const [themeName, setThemeName] = useState('light');

  return (
    <ThemeContext.Provider
      value={{
        themeName,
        setThemeName
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
