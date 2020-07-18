import React from 'react';
import Layout from './components/Layout';
import {UserProvider} from './providers/UserProvider';

const style = { background: '#ecf0f1' };
const App = () => {
  return (
    <UserProvider>
      <div className="App" style={style}>
        <Layout />
      </div>
    </UserProvider>
  );
};

export default App;
