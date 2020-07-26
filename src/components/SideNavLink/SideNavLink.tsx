import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TimerIcon from '@material-ui/icons/Timer';
import SettingsIcon from '@material-ui/icons/Settings';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import HomeIcon from '@material-ui/icons/Home';
import GridOnIcon from '@material-ui/icons/GridOn';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  link: {
    color: 'rgba(0, 0, 0, 0.87)',
    textDecoration: 'none',
  },
});

const iconMap: { [key: string]: any } = {
  home: HomeIcon,
  timer: TimerIcon,
  fitness: FitnessCenterIcon,
  grid: GridOnIcon,
  settings: SettingsIcon,
};

interface ISideNavLink {
  url: string;
  text: string;
  icon: string;
}

const SideNavLink: React.FC<ISideNavLink> = ({ url, text, icon }) => {
  const classes = useStyles();
  const Icon = iconMap[icon];
  return (
    <Link className={classes.link} to={url}>
      <ListItem button>
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItem>
    </Link>
  );
};

export default SideNavLink;
