import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router-dom';
import { auth } from '../../firebase';

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

const SignUp = () => {
  const [sEmail, setEmail] = React.useState('');
  const [sPassword, setPassword] = React.useState('');
  const [sConfirmPassword, setConfirmPassword] = React.useState('');
  const [sErrors, setErrors] = React.useState({
    email: false,
    password: false,
    confirmPassword: false,
  });
  const history = useHistory();

  const onEmailChange = (email: string) => {
    setEmail(email);
    setErrors((errors) => ({ ...errors, email: !email.includes('@') }));
  };

  const onPasswordChange = (password: string) => {
    setPassword(password);
    setErrors((errors) => ({
      ...errors,
      password: password.length < 8,
      confirmPassword: password !== sConfirmPassword,
    }));
  };

  const onConfirmPasswordChange = (confirmPassword: string) => {
    setConfirmPassword(confirmPassword);
    setErrors((errors) => ({
      ...errors,
      confirmPassword: sPassword !== confirmPassword,
    }));
  };

  const onSignUp = () => {
    auth
      .createUserWithEmailAndPassword(sEmail, sPassword)
      .then(() => {
        history.replace('/');
      })
      .catch((error) => {
        setErrors((errors) => ({ ...errors, email: true }));
        /* eslint-disable-next-line no-console */
        console.error(error);
      });
  };

  const classes = useStyles();
  return (
    <Container maxWidth="sm" className={classes.root}>
      <Card>
        <CardContent>
          <Typography variant="h6" align="center" gutterBottom>
            Sign up for Trainer<sup>3</sup>
          </Typography>

          <TextField
            fullWidth
            id="email-input"
            variant="outlined"
            label="Email"
            type="email"
            value={sEmail}
            error={sErrors.email}
            helperText={sErrors.email ? 'Email is not valid' : null}
            onChange={(evt) => onEmailChange(evt.target.value)}
          />
          <TextField
            fullWidth
            id="password-input"
            variant="outlined"
            label="Password"
            type="password"
            autoComplete="new-password"
            error={sErrors.password}
            helperText={
              sErrors.password ? 'Password must be at least 8 characters' : null
            }
            value={sPassword}
            onChange={(evt) => onPasswordChange(evt.target.value)}
          />
          <TextField
            fullWidth
            id="confirm-password-input"
            variant="outlined"
            label="Confirm password"
            type="password"
            autoComplete="new-password"
            value={sConfirmPassword}
            error={sErrors.confirmPassword}
            helperText={sErrors.confirmPassword ? 'Passwords must match' : null}
            onChange={(evt) => onConfirmPasswordChange(evt.target.value)}
          />
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            onClick={onSignUp}
          >
            Sign up
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default SignUp;
