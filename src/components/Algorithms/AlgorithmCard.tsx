import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import { Collapse } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { debounce } from 'lodash';
import { useAlgorithmContext } from '../../providers/AlgorithmProvider';
import Icon from './LastLayerIcon';

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
    fontSize: '5em',
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

interface AlgorithmCardProps {
  algorithm: AlgorithmData;
}
const AlgorithmCard: React.FC<AlgorithmCardProps> = ({ algorithm }) => {
  const {
    algorithms,
    primary,
    name,
    group,
    faces,
    edges,
    type,
    arrows,
  } = algorithm;
  const { ollAlgorithms, pllAlgorithms, upsert } = useAlgorithmContext();
  const [sFavorite, setFavorite] = React.useState(false);
  const [sExpanded, setExpanded] = React.useState(false);
  const [sPrimary, setPrimary] = React.useState(primary);

  const debouncedUpsert = React.useRef(debounce(upsert, 1000, {}));

  React.useEffect(() => {
    // need to update pointer to new function with updated state
    debouncedUpsert.current = debounce(upsert, 1000);
  }, [upsert, pllAlgorithms, ollAlgorithms]);

  /* eslint-disable react-hooks/exhaustive-deps */
  React.useEffect(() => {
    if (type === 'OLL' && ollAlgorithms[name]) {
      setPrimary(ollAlgorithms[name].primary);
      setFavorite(ollAlgorithms[name].favorite);
    }
  }, [name, type, ollAlgorithms[name]]);

  React.useEffect(() => {
    if (type === 'PLL' && pllAlgorithms[name]) {
      setPrimary(pllAlgorithms[name].primary);
      setFavorite(pllAlgorithms[name].favorite);
    }
  }, [name, type, pllAlgorithms[name]]);
  /* eslint-enable react-hooks/exhaustive-deps */

  const classes = useStyles();

  const onPrimaryChange = (primarySelection: string) => {
    debouncedUpsert.current(name, primarySelection, type, sFavorite);
    setPrimary(primarySelection);
  };

  const onFavoriteToggle = () => {
    debouncedUpsert.current(name, sPrimary, type, !sFavorite);
    setFavorite((fav) => !fav);
  };

  const renderAlgWithLabel = (label: string, alg: string) => (
    <>
      <Typography variant="subtitle2" align="left">
        {label}
      </Typography>
      <Typography variant="caption" align="left" gutterBottom>
        {alg}
      </Typography>
    </>
  );

  const renderRadio = (alg: string) => (
    <FormControlLabel
      key={alg}
      value={alg}
      control={<Radio size="small" />}
      label={<Typography variant="caption">{alg}</Typography>}
    />
  );

  const renderRadioGroup = () => (
    <FormControl component="fieldset">
      <FormLabel>
        <Typography variant="subtitle2">Primary</Typography>
      </FormLabel>
      <RadioGroup
        aria-label="primary algorithm"
        name="primaryAlgorithm"
        value={sPrimary}
        onChange={(e) => onPrimaryChange(e.target.value)}
      >
        {algorithms.map(renderRadio)}
      </RadioGroup>
    </FormControl>
  );

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <div className={classes.header}>
          <Typography variant="subtitle2" align="center">
            {name}
          </Typography>
          <Typography variant="subtitle2" align="center">
            ({group})
          </Typography>
        </div>

        <Divider className={classes.divider} />

        <div className={classes.info}>
          <Icon
            className={classes.icon}
            faces={faces}
            edges={edges}
            type={type}
            arrows={arrows}
          />

          <div className={classes.algSection}>
            {renderAlgWithLabel('Solve:', sPrimary)}
            {renderAlgWithLabel('Scramble:', primary)}
          </div>
        </div>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={classes.favButton}
          aria-label="add to favorites"
          onClick={onFavoriteToggle}
        >
          {sFavorite ? (
            <FavoriteIcon className={classes.favIcon} />
          ) : (
            <FavoriteBorderIcon />
          )}
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: sExpanded,
          })}
          onClick={() => setExpanded((exp) => !exp)}
          aria-expanded={sExpanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={sExpanded} timeout="auto" unmountOnExit>
        <CardContent>{renderRadioGroup()}</CardContent>
      </Collapse>
    </Card>
  );
};

export default React.memo(AlgorithmCard);
