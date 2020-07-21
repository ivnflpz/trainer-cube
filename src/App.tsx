import React from 'react';
import Layout from './components/Layout';
import {UserProvider} from './providers/UserProvider';
import {ColorProvider} from './providers/ColorProvider';
import './App.css';

const App = () => {
  return (
    <ColorProvider>
      <UserProvider>
        <div className="App">
          <Layout />
        </div>
      </UserProvider>
    </ColorProvider>
  );
};

export default App;
