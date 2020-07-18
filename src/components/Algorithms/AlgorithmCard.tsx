import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Icon from './Icon';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(1),
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
  },
  algSection: {
    display: 'flex',
    flexDirection: 'column',
  },
  divider: {
    width: '100%',
    margin: theme.spacing(1, 0),
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  info: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    marginRight: theme.spacing(2),
    fontSize: '5em'
  }
}));

interface IAlgorithmCardProps {
  algorithm: AlgorithmData;
}
const AlgorithmCard: React.FC<IAlgorithmCardProps> = ({ algorithm }) => {
  const classes = useStyles();

  const renderAlgWithLabel = (label: string, alg: string) => {
    return (
      <>
        <Typography variant="subtitle2" align="left">
          {label}
        </Typography>
        <Typography variant="caption" align="left" gutterBottom>
          {alg}
        </Typography>
      </>
    );
  };
  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <div className={classes.header}>
          <Typography variant="subtitle2" align="center">
            {algorithm.name}
          </Typography>

          <Typography variant="subtitle2" align="center">
            {algorithm.type}
          </Typography>
        </div>
        
        <Divider className={classes.divider} />

        <div className={classes.info}>
          <Icon className={classes.icon} faces={algorithm.faces} edges={algorithm.edges} />

          <div className={classes.algSection}>
            {renderAlgWithLabel('Solve:', algorithm.displayAlgorithm)}
            {renderAlgWithLabel('Scramble:', algorithm.displayAlgorithm)}
          </div>
          
        </div>
      </CardContent>
    </Card>
  );
};

export default AlgorithmCard;