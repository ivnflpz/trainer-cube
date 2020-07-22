import React from 'react';
import { ColorPicker, ColorButton } from 'material-ui-color';
import { useColorsContext } from '../../providers/ColorProvider';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import AlertDialog from './AlertDialog';

const useStyles = makeStyles({
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  colorButton: {
    marginRight: '.5em',
    marginTop: '0.5em',
  },
  colorRow: {
    marginTop: '0.5em'
  },
  colorRowOffset: {
    marginLeft: '2em'
  },
  cubeContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  title: {
    alignSelf: 'flex-start',
  }
});

const ColorSchemeSettings = () => {
  const [sOpen, setOpen] = React.useState(false);
  const { colors, updateColors, resetToDefault } = useColorsContext();
  const classes = useStyles();

  const onAccept = () => {
    resetToDefault();
    setOpen(false);
  };

  // TODO: replace full color picker with new component without text fields
  const renderColorPicker = (label: string, face: string) => {
    return (
      <div>
        <Typography variant="subtitle2" align="left">
          {label}
        </Typography>
        <ColorPicker value={colors[face]} onChange={(color) => updateColors(face, color.css.backgroundColor || colors[face])} />
      </div>
    );
  };

  const renderCubeScheme = () => {
    return (
      <section className={classes.cubeContainer}>
        <Typography className={classes.title} variant="subtitle2">
              Color scheme
        </Typography>
        <div>
          <div className={clsx(classes.colorRow, classes.colorRowOffset)}>
            <span className={classes.colorButton}><ColorButton color={colors.B} /></span>
          </div>
          <div className={classes.colorRow}>
            <span className={classes.colorButton}><ColorButton color={colors.L} /></span>
            <span className={classes.colorButton}><ColorButton color={colors.D} /></span>
            <span className={classes.colorButton}><ColorButton color={colors.R} /></span>
            <span className={classes.colorButton}><ColorButton color={colors.U} /></span>
          </div>
          <div className={clsx(classes.colorRow, classes.colorRowOffset)}>
            <span className={classes.colorButton}><ColorButton color={colors.F} /></span>
          </div>
        </div>
      </section>
    );
  };

  return (
    <>
      <Card variant="outlined">
        <CardContent>
          {renderCubeScheme()}
          {renderColorPicker('Up', 'U')}
          {renderColorPicker('Down', 'D')}
          {renderColorPicker('Front', 'F')}
          {renderColorPicker('Back', 'B')}
          {renderColorPicker('Right', 'R')}
          {renderColorPicker('Left', 'L')}
          
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button color="secondary" variant="outlined" onClick={() => setOpen(true)}>Reset</Button>
          <AlertDialog open={sOpen} title="Reset color scheme?" onClose={() => setOpen(false)} onAccept={onAccept}>
            <Typography>Are you sure you want to reset to the default scheme?</Typography>
          </AlertDialog>
        </CardActions>
      </Card>
    </>
  );
};

export default ColorSchemeSettings;