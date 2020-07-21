import React from 'react';
import { ColorPicker, ColorButton } from 'material-ui-color';
import { useColorsContext } from '../../providers/ColorProvider';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import clsx from 'clsx';

const useStyles = makeStyles({
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

const Settings = () => {
  const { colors, updateColors } = useColorsContext();
  const classes = useStyles();

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
      </Card>
    </>
  );
};

export default Settings;