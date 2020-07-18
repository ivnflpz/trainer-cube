import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Icon from './Icon';

type Algorithm = {
  name: string;
  displayAlgorithm: string;
  faces: string;
  edges: string;
  type: string;
}
const ollList: Algorithm[] = [
  { name: 'OLL 1', 
    displayAlgorithm: "(R U2) (R2' F R F') U2' (R' F R F')",
    faces: 'N N N N Y N N N N',
    edges: 'N Y N Y Y Y N Y N Y Y Y',
    type: 'Dot',
  },
  { name: 'OLL 2', 
    displayAlgorithm: "F (R U R' U') S (R U R' U') Fw'",
    faces: 'N N N N Y N N N N',
    edges: 'N Y Y N Y N Y Y N Y Y Y',
    type: 'Dot',
  },
  { name: 'OLL 3', 
    displayAlgorithm: "Fw (R U R' U') Fw' U' F (R U R' U') F'",
    faces: 'N N N N Y N N N Y',
    edges: 'Y Y N Y Y N N Y N Y Y N',
    type: 'Dot',
  },
  { name: 'OLL 4', 
    displayAlgorithm: "Fw (R U R' U') Fw' U F (R U R' U') F'",
    faces: 'N N Y N Y N N N N',
    edges: 'N Y N N Y Y N Y Y N Y Y',
    type: 'Dot',
  },
  { name: 'OLL 5', 
    displayAlgorithm: "(Rw' U2) (R U R' U Rw)",
    faces: 'N N N N Y Y N Y Y',
    edges: 'Y Y N Y N N N N N Y Y N',
    type: 'Square',
  },
  { name: 'OLL 6', 
    displayAlgorithm: "(Rw U2) (R' U' R U' Rw')",
    faces: 'N Y Y N Y Y N N N',
    edges: 'N N N N N Y N Y Y N Y Y',
    type: 'Square',
  },
  { name: 'OLL 24', 
    displayAlgorithm: "(Lw' U') (L U) (R U') (Rw' F)",
    faces: 'Y Y N Y Y Y Y Y N',
    edges: 'N N Y N N N Y N N N N N',
    type: 'Cross',
  },
];

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
  algorithm: Algorithm;
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

const Algorithms = () => {
  return (
    <>
      <div>
        {ollList.map(oll => <AlgorithmCard key={oll.name} algorithm={oll} />)}
      </div>
    </>
  );
};

export default Algorithms;