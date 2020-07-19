import React from 'react';
import Layout from './components/Layout';
import {UserProvider} from './providers/UserProvider';
import './App.css';

const App = () => {
  return (
    <UserProvider>
      <div className="App">
        <Layout />
      </div>
    </UserProvider>
  );
};

export default App;
