import React from 'react';
import AlgorithmCard from './AlgorithmCard';

const pllList: AlgorithmData[] = [
  { name: 'Ua', 
    displayAlgorithm: "R2 U' R' U' R U R U R U' R",
    edges: 'B L B R B R F F F L R L',
    group: 'Edges',
    arrows: '1-3>,3-5>,1>-5',
    type: 'PLL',
  },
  { name: 'Ub', 
    displayAlgorithm: "R' U R' U' R' U' R' U R U R2",
    edges: 'B R B R L R F F F L B L',
    group: 'Edges',
    arrows: '1>-3,3>-5,1-5>',
    type: 'PLL',
  },
  { name: 'Aa', 
    displayAlgorithm: "(x) R' U R' D2 R U' R' D2 R2 (x')",
    edges: 'R B R F R L B F F L L B',
    group: 'Corners',
    arrows: '0-2>,2-8>,0>-8',
    type: 'PLL',
  },
];

const ollList: AlgorithmData[] = [
  { name: 'OLL 1', 
    displayAlgorithm: "(R U2) (R2' F R F') U2' (R' F R F')",
    faces: 'N N N N U N N N N',
    edges: 'N U N U U U N U N U U U',
    group: 'Dot',
    type: 'OLL',
  },
  { name: 'OLL 2', 
    displayAlgorithm: "F (R U R' U') S (R U R' U') Fw'",
    faces: 'N N N N U N N N N',
    edges: 'N U U N U N U U N U U U',
    group: 'Dot',
    type: 'OLL',
  },
  { name: 'OLL 3', 
    displayAlgorithm: "Fw (R U R' U') Fw' U' F (R U R' U') F'",
    faces: 'N N N N U N N N U',
    edges: 'U U N U U N N U N U U N',
    group: 'Dot',
    type: 'OLL',
  },
  { name: 'OLL 4', 
    displayAlgorithm: "Fw (R U R' U') Fw' U F (R U R' U') F'",
    faces: 'N N U N U N N N N',
    edges: 'N U N N U U N U U N U U',
    group: 'Dot',
    type: 'OLL',
  },
  { name: 'OLL 5', 
    displayAlgorithm: "(Rw' U2) (R U R' U Rw)",
    faces: 'N N N N U U N U U',
    edges: 'U U N U N N N N N U U N',
    group: 'Square',
    type: 'OLL',
  },
  { name: 'OLL 6', 
    displayAlgorithm: "(Rw U2) (R' U' R U' Rw')",
    faces: 'N U U N U U N N N',
    edges: 'N N N N N U N U U N U U',
    group: 'Square',
    type: 'OLL',
  },
  { name: 'OLL 24', 
    displayAlgorithm: "(Lw' U') (L U) (R U') (Rw' F)",
    faces: 'U U N U U U U U N',
    edges: 'N N U N N N U N N N N N',
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
