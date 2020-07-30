import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  timer: {
    position: 'fixed',
    left: 0,
    width: '100vw',
    height: '100vh',
    margin: 0,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
}));

const Timer = () => {
  const classes = useStyles();
  const [minutes, setMintues] = React.useState(0);
  const [seconds, setSeconds] = React.useState(-5);
  const ref = React.useRef<any>();

  const stopTimer = () => {
    clearInterval(ref.current);
    ref.current = null;
  };

  const startTimer = () => {
    ref.current = setInterval(() => {
      setSeconds((s) => {
        if (s + 1 === 60) {
          setMintues((m) => m + 1);
          return 0;
        }
        return s + 1;
      });
    }, 1000);
  };

  const toggleTimer = () => {
    if (ref.current != null) {
      stopTimer();
    } else {
      startTimer();
    }
  };

  return (
    <div
      className={classes.timer}
      tabIndex={0}
      role="button"
      onClick={toggleTimer}
      onKeyDown={toggleTimer}
    >
      <h1>
        {minutes < 10 ? 0 : ''}
        {minutes}:{seconds < 10 ? 0 : ''}
        {seconds < 0 ? Math.abs(seconds) : seconds}
      </h1>
    </div>
  );
};

export default Timer;
