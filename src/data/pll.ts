const pllList: AlgorithmData[] = [
  {
    name: 'Ua',
    primary: "R2 U' R' U' R U R U R U' R",
    edges: 'B L B R B R F F F L R L',
    group: 'Edges',
    arrows: '1-3>,3-5>,1>-5',
    type: 'PLL',
    algorithms: [
      "R2 U' R' U' R U R U R U' R",
      "(x) R' U R' D2 R U' R' D2 R2 (x')",
      "l' U R' D2 R U' R' D2 R2 (x')",
      "(x') R' D R' U2 R D' R' U2 R2 (x)",
      "l' U R' (z) r2 U R' U' r2 (z) L2' (x')",
    ],
  },
  {
    name: 'Ub',
    primary: "R' U R' U' R' U' R' U R U R2",
    edges: 'B R B R L R F F F L B L',
    group: 'Edges',
    arrows: '1>-3,3>-5,1-5>',
    type: 'PLL',
    algorithms: ["R' U R' U' R' U' R' U R U R2"],
  },
  {
    name: 'Aa',
    primary: "(x) R' U R' D2 R U' R' D2 R2 (x')",
    edges: 'R B R F R L B F F L L B',
    group: 'Corners',
    arrows: '0-2>,2-8>,0>-8',
    type: 'PLL',
    algorithms: ["(x) R' U R' D2 R U' R' D2 R2 (x')"],
  },
];

export default pllList;
