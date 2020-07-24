import React from 'react';
import Layout from './components/Layout';
import {UserProvider} from './providers/UserProvider';
import {ColorProvider} from './providers/ColorProvider';
import { AlgorithmProvider } from './providers/AlgorithmProvider';
import './App.css';

const App = () => {
  return (
    <ColorProvider>
      <UserProvider>
        <AlgorithmProvider>
          <div className="App">
            <Layout />
          </div>
        </AlgorithmProvider>
      </UserProvider>
    </ColorProvider>
  );
};

export default App;
