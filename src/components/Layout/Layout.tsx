import React from 'react';
import AppBar from '../AppBar';
import SideNav from '../SideNav';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../Home';
import Timer from '../Timer';
import Settings from '../Settings';
import Trainer from '../Trainer';
import Algorithms from '../Algorithms';
import { Login } from '../LoginSignup';

const Layout: React.FC = () => {
  const [sSidenavOpen, setSidenavOpen] = React.useState(false);

  return (
    <BrowserRouter>
      <AppBar onMenuToggle={setSidenavOpen} />
      <SideNav open={sSidenavOpen} onOpenToggle={setSidenavOpen}/>
      <Switch>
        <Route exact path="/timer">
          <Timer />
        </Route>
        <Route exact path="/trainer">
          <Trainer />
        </Route>
        <Route exact path="/algorithms">
          <Algorithms />
        </Route>
        <Route exact path="/settings">
          <Settings />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Layout;