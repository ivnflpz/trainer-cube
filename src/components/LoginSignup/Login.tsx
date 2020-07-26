import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import { Link, useHistory } from 'react-router-dom';
import { signInWithGoogle, auth } from '../../firebase';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 14,
    '& .MuiTextField-root': {
      margin: theme.spacing(0, 0, 2),
    },
  },
  divider: {
    margin: theme.spacing(3, 0),
  },
}));

const Login = () => {
  const [sEmail, setEmail] = React.useState('');
  const [sPassword, setPassword] = React.useState('');
  const [sError, setError] = React.useState(false);
  const history = useHistory();

  const onSignIn = () => {
    auth
      .signInWithEmailAndPassword(sEmail, sPassword)
      .then(() => {
        history.replace('/');
      })
      .catch((error) => {
        setError(true);
        /* eslint-disable-next-line no-console */
        console.error(error);
      });
  };

  const onSignInWithGoogle = () => {
    signInWithGoogle().then(() => {
      history.replace('/');
    });
  };

  const classes = useStyles();
  return (
    <Container maxWidth="sm" className={classes.root}>
      <Card>
        <CardContent>
          <Typography variant="h6" align="center" gutterBottom>
            Login to Trainer<sup>3</sup>
          </Typography>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={onSignInWithGoogle}
          >
            Sign in with Google
          </Button>

          <Divider className={classes.divider} />

          <TextField
            fullWidth
            id="email-input"
            variant="outlined"
            label="Email"
            type="email"
            value={sEmail}
            error={sError}
            onChange={(evt) => setEmail(evt.target.value)}
          />
          <TextField
            fullWidth
            id="password-input"
            variant="outlined"
            label="Password"
            type="password"
            autoComplete="current-password"
            value={sPassword}
            error={sError}
            onChange={(evt) => setPassword(evt.target.value)}
          />
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            onClick={onSignIn}
          >
            Sign in
          </Button>

          <Divider className={classes.divider} />

          <Typography variant="subtitle2" align="center" gutterBottom>
            New user? <Link to="/signup">Sign up</Link>
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Login;
