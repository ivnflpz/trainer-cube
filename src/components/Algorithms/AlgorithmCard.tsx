import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Icon from './Icon';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import { Collapse } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(1),
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(1.25, 1.25, 0),
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
  },
  favButton: {
    padding: theme.spacing(1),
  },
  favIcon: {
    color: 'red',
  },
  expand: {
    padding: theme.spacing(1),
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

interface IAlgorithmCardProps {
  algorithm: AlgorithmData;
}
const AlgorithmCard: React.FC<IAlgorithmCardProps> = ({ algorithm }) => {
  const [sFavorite, setFavorite] = React.useState(false);
  const [sExpanded, setExpanded] = React.useState(false);
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
            ({algorithm.type})
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
      <CardActions disableSpacing>
        <IconButton className={classes.favButton} aria-label="add to favorites" onClick={() => setFavorite(fav => !fav)}>
          { sFavorite ? <FavoriteIcon className={classes.favIcon} /> : <FavoriteBorderIcon />}
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: sExpanded,
          })}
          onClick={() => setExpanded(exp => !exp)}
          aria-expanded={sExpanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={sExpanded} timeout="auto" unmountOnExit>
        <CardContent>
          Placeholder for all algorithms
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default AlgorithmCard;