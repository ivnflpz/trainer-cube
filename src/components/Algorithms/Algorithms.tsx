import React from 'react';
import AlgorithmCard from './AlgorithmCard';

const pllList: AlgorithmData[] = [
  { name: 'Ua', 
    displayAlgorithm: "R2 U' R' U' R U R U R U' R",
    edges: 'O B O G O G R R R B G B',
    group: 'Edges',
    arrows: '1-3>,3-5>,1>-5',
    type: 'PLL',
  },
  { name: 'Ub', 
    displayAlgorithm: "R' U R' U' R' U' R' U R U R2",
    edges: 'O G O G B G R R R B O B',
    group: 'Edges',
    arrows: '1>-3,3>-5,1-5>',
    type: 'PLL',
  },
  { name: 'Aa', 
    displayAlgorithm: "(x) R' U R' D2 R U' R' D2 R2 (x')",
    edges: 'G O G R G B O R R B B O',
    group: 'Corners',
    arrows: '0-2>,2-8>,0>-8',
    type: 'PLL',
  },
];

const ollList: AlgorithmData[] = [
  { name: 'OLL 1', 
    displayAlgorithm: "(R U2) (R2' F R F') U2' (R' F R F')",
    faces: 'N N N N Y N N N N',
    edges: 'N Y N Y Y Y N Y N Y Y Y',
    group: 'Dot',
    type: 'OLL',
  },
  { name: 'OLL 2', 
    displayAlgorithm: "F (R U R' U') S (R U R' U') Fw'",
    faces: 'N N N N Y N N N N',
    edges: 'N Y Y N Y N Y Y N Y Y Y',
    group: 'Dot',
    type: 'OLL',
  },
  { name: 'OLL 3', 
    displayAlgorithm: "Fw (R U R' U') Fw' U' F (R U R' U') F'",
    faces: 'N N N N Y N N N Y',
    edges: 'Y Y N Y Y N N Y N Y Y N',
    group: 'Dot',
    type: 'OLL',
  },
  { name: 'OLL 4', 
    displayAlgorithm: "Fw (R U R' U') Fw' U F (R U R' U') F'",
    faces: 'N N Y N Y N N N N',
    edges: 'N Y N N Y Y N Y Y N Y Y',
    group: 'Dot',
    type: 'OLL',
  },
  { name: 'OLL 5', 
    displayAlgorithm: "(Rw' U2) (R U R' U Rw)",
    faces: 'N N N N Y Y N Y Y',
    edges: 'Y Y N Y N N N N N Y Y N',
    group: 'Square',
    type: 'OLL',
  },
  { name: 'OLL 6', 
    displayAlgorithm: "(Rw U2) (R' U' R U' Rw')",
    faces: 'N Y Y N Y Y N N N',
    edges: 'N N N N N Y N Y Y N Y Y',
    group: 'Square',
    type: 'OLL',
  },
  { name: 'OLL 24', 
    displayAlgorithm: "(Lw' U') (L U) (R U') (Rw' F)",
    faces: 'Y Y N Y Y Y Y Y N',
    edges: 'N N Y N N N Y N N N N N',
    group: 'Cross',
    type: 'OLL',
  },
];
interface IAlgorithmsProps {
  type: AlgType;
}

const Algorithms: React.FC<IAlgorithmsProps> = ({ type }) => {
  const list = type === 'OLL' ? ollList : pllList;
  return (
    <>
      <div>
        {list.map(alg => <AlgorithmCard key={alg.name} algorithm={alg} />)}
      </div>
    </>
  );
};

export default Algorithms;
