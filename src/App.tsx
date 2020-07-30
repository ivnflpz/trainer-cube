import React from 'react';
import { hot } from 'react-hot-loader/root';
import Layout from './components/Layout';
import { UserProvider } from './providers/UserProvider';
import { ColorProvider } from './providers/ColorProvider';
import { AlgorithmProvider } from './providers/AlgorithmProvider';
import './App.css';

const App = () => (
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

export default hot(App);
