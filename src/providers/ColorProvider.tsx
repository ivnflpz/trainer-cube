import React from 'react';

interface ColorContext {
  colors: any;
  updateColors: (face: string, value: string) => void;
  resetToDefault: () => void;
}

const ColorContext = React.createContext<ColorContext>({
  colors: null,
  updateColors: () => null,
  resetToDefault: () => null,
});

const COLORS_KEY = 'trainerColors';
const defaultColors = {
  U: 'yellow',
  D: 'white',
  F: 'red',
  B: 'orange',
  R: 'green',
  L: 'blue',
  N: 'gray',
};

const ColorProvider: React.FC = ({ children }) => {
  const [sColors, setColors] = React.useState(defaultColors);

  React.useEffect(() => {
    const lsColorsString = localStorage.getItem(COLORS_KEY);
    if (lsColorsString !== null) {
      setColors(JSON.parse(lsColorsString));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem(COLORS_KEY, JSON.stringify(sColors));
  }, [sColors]);

  const updateColors = (face: string, value: string) => {
    setColors((colors) => ({ ...colors, [face]: value }));
  };

  const resetToDefault = () => {
    setColors(defaultColors);
  };

  return (
    <ColorContext.Provider
      value={{ colors: sColors, updateColors, resetToDefault }}
    >
      {children}
    </ColorContext.Provider>
  );
};

const useColorsContext = () => {
  const context = React.useContext(ColorContext);
  return context;
};

export { ColorProvider, useColorsContext };
