const ollList: AlgorithmData[] = [
  { name: 'OLL 1', 
    displayAlgorithm: "(R U2) (R2' F R F') U2' (R' F R F')",
    faces: 'N N N N U N N N N',
    edges: 'N U N U U U N U N U U U',
    group: 'Dot',
    type: 'OLL',
    algorithms: [
      "(R U2) (R2' F R F') U2' (R' F R F')",
    ]
  },
  { name: 'OLL 2', 
    displayAlgorithm: "F (R U R' U') S (R U R' U') Fw'",
    faces: 'N N N N U N N N N',
    edges: 'N U U N U N U U N U U U',
    group: 'Dot',
    type: 'OLL',
    algorithms: [
      "F (R U R' U') S (R U R' U') Fw'",
    ]
  },
  { name: 'OLL 3', 
    displayAlgorithm: "Fw (R U R' U') Fw' U' F (R U R' U') F'",
    faces: 'N N N N U N N N U',
    edges: 'U U N U U N N U N U U N',
    group: 'Dot',
    type: 'OLL',
    algorithms: [
      "Fw (R U R' U') Fw' U' F (R U R' U') F'",
    ]
  },
  { name: 'OLL 4', 
    displayAlgorithm: "Fw (R U R' U') Fw' U F (R U R' U') F'",
    faces: 'N N U N U N N N N',
    edges: 'N U N N U U N U U N U U',
    group: 'Dot',
    type: 'OLL',
    algorithms: [
      "Fw (R U R' U') Fw' U F (R U R' U') F'",
    ]
  },
  { name: 'OLL 5', 
    displayAlgorithm: "(Rw' U2) (R U R' U Rw)",
    faces: 'N N N N U U N U U',
    edges: 'U U N U N N N N N U U N',
    group: 'Square',
    type: 'OLL',
    algorithms: [
      "(Rw' U2) (R U R' U Rw)",
    ]
  },
  { name: 'OLL 6', 
    displayAlgorithm: "(Rw U2) (R' U' R U' Rw')",
    faces: 'N U U N U U N N N',
    edges: 'N N N N N U N U U N U U',
    group: 'Square',
    type: 'OLL',
    algorithms: [
      "(Rw U2) (R' U' R U' Rw')",
    ]
  },
  { name: 'OLL 24', 
    displayAlgorithm: "(Lw' U') (L U) (R U') (Rw' F)",
    faces: 'U U N U U U U U N',
    edges: 'N N U N N N U N N N N N',
    group: 'Cross',
    type: 'OLL',
    algorithms: [
      "(Lw' U') (L U) (R U') (Rw' F)",
    ]
  },
];

export default ollList;