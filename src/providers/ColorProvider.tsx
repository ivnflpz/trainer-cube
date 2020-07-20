import React from 'react';

interface IColorContext {
    colors: any;
}

const ColorContext = React.createContext<IColorContext>({ 
  colors: null
});

const ColorProvider: React.FC = ({children}) => {
  const [sColors, setColors] = React.useState({U: 'yellow',
    D: 'white',
    F: 'red',
    B: 'orange',
    R: 'green',
    L: 'blue',
    N: 'gray' });
  return (
    <ColorContext.Provider value={{ colors: sColors }}>
      {children}
    </ColorContext.Provider>
  );
};

const useColorsContext = () => {
  const context = React.useContext(ColorContext);
  return context;
};

export { ColorProvider, useColorsContext };