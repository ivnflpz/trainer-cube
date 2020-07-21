import React from 'react';

interface IColorContext {
    colors: any;
    updateColors: (face: string, value: string) => void;
}

const ColorContext = React.createContext<IColorContext>({ 
  colors: null,
  updateColors: () => null,
});

const COLORS_KEY = 'trainerColors';
const ColorProvider: React.FC = ({children}) => {
  const [sColors, setColors] = React.useState({U: 'yellow',
    D: 'white',
    F: 'red',
    B: 'orange',
    R: 'green',
    L: 'blue',
    N: 'gray' });

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
    setColors(colors => { return {...colors, [face]: value}; });
  };
    
  return (
    <ColorContext.Provider value={{ colors: sColors, updateColors }}>
      {children}
    </ColorContext.Provider>
  );
};

const useColorsContext = () => {
  const context = React.useContext(ColorContext);
  return context;
};

export { ColorProvider, useColorsContext };