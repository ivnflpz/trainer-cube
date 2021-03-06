import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Link } from 'react-router-dom';
import { useUserContext } from '../../providers/UserProvider';
import { signOut } from '../../firebase';

const useStyles = makeStyles(() => ({
  avatar: {
    width: 24,
    height: 24,
  },
  link: {
    color: 'white',
    textDecoration: 'none',
  },
}));

const UserActions: React.FC = () => {
  const classes = useStyles();
  const { user } = useUserContext();
  const [sAnchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(sAnchorEl);

  const onMenuClick = (event: any): void => {
    setAnchorEl(event.currentTarget);
  };

  const onMenuClose = (): void => {
    setAnchorEl(null);
  };

  const renderUserActions = (): React.ReactElement => {
    const { displayName, photoURL } = user;
    const userIcon =
      photoURL !== null ? (
        <Avatar className={classes.avatar} alt={displayName} src={photoURL} />
      ) : (
        <AccountCircle />
      );
    return (
      <div>
        <IconButton
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={onMenuClick}
          color="inherit"
        >
          {userIcon}
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={sAnchorEl}
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
          onClose={onMenuClose}
        >
          <MenuItem onClick={onMenuClose}>Profile</MenuItem>
          <MenuItem onClick={onMenuClose}>My account</MenuItem>
          <MenuItem onClick={signOut}>Logout</MenuItem>
        </Menu>
      </div>
    );
  };

  if (user !== null && user !== undefined) {
    return renderUserActions();
  }
  return (
    <Link to="/login" className={classes.link}>
      <Button color="inherit">Login</Button>
    </Link>
  );
};

export default UserActions;
