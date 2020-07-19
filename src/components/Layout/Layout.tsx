import React from 'react';
import AppBar from '../AppBar';
import SideNav from '../SideNav';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../Home';
import Timer from '../Timer';
import Settings from '../Settings';
import Trainer from '../Trainer';
import Algorithms from '../Algorithms';
import { Login, SignUp } from '../LoginSignup';
import { useUserContext } from '../../providers/UserProvider';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: theme.spacing(7.5)
  }
}));
const Layout: React.FC = () => {
  const [sSidenavOpen, setSidenavOpen] = React.useState(false);
  const { authenticated } = useUserContext();
  const classes = useStyles();

  return (
    <BrowserRouter>
      <AppBar onMenuToggle={setSidenavOpen} />
      <SideNav open={sSidenavOpen} onOpenToggle={setSidenavOpen}/>
      <Container className={classes.mainContainer}>
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
            { authenticated ? <Redirect to="/" /> : <Login />}
          </Route>
          <Route exact path="/signup">
            { authenticated ? <Redirect to="/" /> : <SignUp />}
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default Layout;