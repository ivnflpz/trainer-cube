import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import SideNavLink from '../SideNavLink';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  link: {
    color: 'rgba(0, 0, 0, 0.87)',
    textDecoration: 'none',
  }
});

interface ISidenavProps {
    open: boolean;
    onOpenToggle: (open: boolean) => void;
}

const routes = [
  [{
    url: '/',
    text: 'Home',
    icon: 'home',
  }],
  [{
    url: '/timer',
    text: 'Timer',
    icon: 'timer',
  },
  {
    url: '/trainer',
    text: 'Trainer',
    icon: 'fitness',
  }],
  [{
    url: '/algorithms/oll',
    text: 'OLL',
    icon: 'grid',
  },
  {
    url: '/algorithms/pll',
    text: 'PLL',
    icon: 'grid',
  }
  ],
  [{
    url: '/settings',
    text: 'Settings',
    icon: 'settings',
  }]
];

const SideNav: React.FC<ISidenavProps> = ({ open, onOpenToggle }) => {
  const classes = useStyles();

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={() => onOpenToggle(false)}
      onKeyDown={() => onOpenToggle(false)}
    >
      {routes.map((section, index) => {
        return (
          <React.Fragment key={`section-${index}`}>
            <List>
              {section.map(route => <SideNavLink key={route.text} url={route.url} text={route.text} icon={route.icon}/>)}
            </List>
            {index !== routes.length - 1 && <Divider />}
          </React.Fragment>
        ); 
      })}
    </div>
  );

  return (
    <div>
      <React.Fragment>
        <SwipeableDrawer
          anchor="left"
          open={open}
          onClose={() => onOpenToggle(false)}
          onOpen={() => onOpenToggle(true)}
        >
          {list()}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
};

export default SideNav;