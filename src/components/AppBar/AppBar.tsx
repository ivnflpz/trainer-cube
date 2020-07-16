import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { signInWithGoogle, signOut } from '../../firebase';
import { useUserContext } from '../../providers/UserProvider';
import Avatar from '@material-ui/core/Avatar';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  avatar: {
    width: 24,
    height: 24,
  },
}));

interface IAppBarProps {
    onMenuToggle: (open: boolean) => void;
}

const AppBar: React.FC<IAppBarProps> = ({ onMenuToggle }) => {
  const classes = useStyles();
  const {user} = useUserContext();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderActions = (): React.ReactElement => {
    if (user !== null && user !== undefined) {
      return renderUserActions();
    } else {
      return <Button color="inherit" onClick={signInWithGoogle}>Login</Button>;
    }
  };

  const renderUserActions = () => {
    const { displayName, photoURL } = user;
    const userIcon = photoURL !== null ? <Avatar className={classes.avatar} alt={displayName} src={photoURL} /> : <AccountCircle />;
    return (
      <div>
        <IconButton
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
        >
          {userIcon}
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={signOut}>Logout</MenuItem>
        </Menu>
      </div>
    );
  };

  return (
    <div className={classes.root}>
      <MuiAppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => onMenuToggle(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Trainer<sup>3</sup>
          </Typography>
          {renderActions()}
        </Toolbar>
      </MuiAppBar>
    </div>
  );
};

export default AppBar;