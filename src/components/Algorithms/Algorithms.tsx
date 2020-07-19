import React from 'react';
import AlgorithmCard from './AlgorithmCard';

const ollList: AlgorithmData[] = [
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