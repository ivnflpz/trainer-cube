const pllList: AlgorithmData[] = [
  {
    name: 'H',
    primary: "M2' U M2' U2 M2' U M2'",
    edges: 'B F B R L R F B F L R L',
    group: 'Edges',
    arrows: '1>-7>,3>-5>',
    type: 'PLL',
    algorithms: [
      "M2' U M2' U2 M2' U M2'",
      "M2' U' M2' U2' M2' U' M2'",
      "R2' U2 R' U2 R2' U2' R2' U2 R' U2 R2'",
      "M2' U2 M2' U' M2' U2 M2' U",
      "M2' U2 M2' U M2' U2 M2' U'",
      'R2 U2 R U2 R2 U2 R2 U2 R U2 R2',
      'R2 U2 R2 U2 R2 U R2 U2 R2 U2 R2',
      "R U2' R' U' R' U' R2 U' R2' U2' R2 U2' R' (U)",
      "L2 U2 L' U2 L2 U2 L2 U2 L' U2 L2",
      "L R U2 L' R' F' B' U2 F B",
      "L R U2 L' R' (y) L' R' U2 L R",
      "S R U2 R2 U2 R2 U2 R S'",
      "F2 M2' F2 U' F2 M2' F2",
      "(x) U2 M2' U2 B' U2 M2' U2 (x')",
      "L R U2 L' l' U' u' L2 U (z) L",
      "M2' u M2' u2 M2' u M2'",
      "M2' u' M2' u2' M2' u' M2'",
    ],
  },
  {
    name: 'Ua',
    primary: "R2 U' R' U' R U R U R U' R",
    edges: 'B L B R B R F F F L R L',
    group: 'Edges',
    arrows: '1-3>,3-5>,1>-5',
    type: 'PLL',
    algorithms: [
      "R2 U' R' U' R U R U R U' R",
      "(y2) R U' R U R U R U' R' U' R2",
      "R U R' U R' U' R2 U' R' U R' U R",
      "M2 U M' U2 M U M2",
      "(y2) M2 U M U2 M' U M2",
      "(y') M2 u' M u2 M u' M2",
      "(y) M2 u' M' u2 M' u' M2",
      "(y2) F2 U' (L R') F2 (L' R) U' F2",
      "(y2) F2 U' M' U2 M U' F2",
      "R U R' U' L' U' L U2 R U' R' U' L' U L",
      "r U R' U R' U' R2 U' r' U R' U R",
      "R2 U' S' U2' S U' R2",
    ],
  },
  {
    name: 'Ub',
    primary: "R' U R' U' R' U' R' U R U R2",
    edges: 'B R B R L R F F F L B L',
    group: 'Edges',
    arrows: '1>-3,3>-5,1-5>',
    type: 'PLL',
    algorithms: [
      "R' U R' U' R' U' R' U R U R2",
      "(y2) R2 U R U R' U' R' U' R' U R'",
      "M2 U' M' U2 M U' M2",
      "(y2) M2 U' M U2 M' U' M2",
      "(y2) L' U L' U' L' U' L' U L U L2",
      "(y') M2 u M' u2 M' u M2",
      "R U' R U R U R' U' R' U' R' U2 R'",
      "(y2) R' U' R U' R U R2 U R U' R U' R'",
      "(y2) (L' U' L U) (R U R') U2 (L' U L) (U R U' R')",
      "(z) U2' R U R U' R' U' R' U' R U' (z')",
      "(y2 z) U' R U' R' U' R' U' R U R U2' (z')",
      "(y2) F2 U M' U2 M U F2",
      "(y') r2 u M' u2 M' u r2",
      "(y2) (L' U' L U' L' U2 L) U' (R U R' U R U2' R')",
    ],
  },
  {
    name: 'Z',
    primary: 'M2 U M2 U M U2 M2 U2 M U2',
    edges: 'B L B R F R F R F L B L',
    group: 'Edges',
    arrows: '1>-3>,5>-7>',
    type: 'PLL',
    algorithms: [
      'M2 U M2 U M U2 M2 U2 M U2',
      "(y) M2 U' M2 U' M U2' M2 U2' M U2'",
      "M2 U' M (U2 M2 U2) M U M2",
      "(y) M2 U M (U2' M2 U2') M U' M2",
      "R' U' R2 U (R U R' U') (R U R U') R U' R' U2",
      "R U R' U R' U' R' U R U' R' U' R2 U R U2",
      "(y) (M2' U')2 M' (U2' M2' U2') M'",
      "M2' U2 M' U' M2' U' M2' U' M'",
      "(y) M2' U2 M' U M2' U M2' U M'",
      "M' U' M2' U' M2' U' M' U2 M2'",
      "(y) M' U M2' U M2' U M' U2 M2'",
      "M' U2 M2 U2 M' U' M2 U' M2",
      "M2' U M2' U' E2 M' E2 M'",
      "(y) M2' U' M2' U E2 M' E2 M'",
      "M2' U M' E2 M' E2 U' M2'",
      "M2' U M2' U M2 B2 M2 B2",
      "(M2' U)2 M' (U2 M2' U2) M' U2",
      "U R' U' R U' R U R U' R' U R U R2 U' R' U",
      "(y) R U R2 U' R' U' R U R' U' R' U R' U R",
      "(x') R U' R' (U D) R' (D U') R' U R D2' (x)",
      "M2' u M2' D' M S2 M'",
      "(y) R2 U R2 U' R2 F2 R2 U' F2 U R2 F2",
      "R2 U' R2 U R2 (x') U2 R2 F U2 F' R2 U2 (x)",
      "(y') l' U R U' D' R U D' R U' R' D2 (x')",
      "R' U' R' F R F' U R F' U' L' U L F",
      "R' U' R' F R F' U R U' R' U' F' U F R",
      "R U R2 U' R' F R U R U' R U' R' U' R U R' F'",
    ],
  },
  {
    name: 'Aa',
    primary: "(x) R' U R' D2 R U' R' D2 R2 (x')",
    edges: 'R B R F R L B F F L L B',
    group: 'Corners',
    arrows: '0-2>,2-8>,0>-8',
    type: 'PLL',
    algorithms: [
      "(x) R' U R' D2 R U' R' D2 R2 (x')",
      "l' U R' D2 R U' R' D2 R2 (x')",
      "(x') R' D R' U2 R D' R' U2 R2 (x)",
      "l' U R' (z) r2 U R' U' r2 (z) L2' (x')",
      "R' F R' B2 R F' R' B2 R2",
      "(y x') R2 u2 r' F' r u2 R' U l'",
      "(y x') R2 D2 R' U' R D2 R' U R'",
      "(y' x) L2 D2 L' U' L D2 L' U L' (x')",
      "B2 R2 B' L' B R2 B' L B'",
      "(y2 z) F2 R U2 R' U2 F2 L' U2 L U2 (z')",
      "(y z') U2 R U2 R' F2 U2 L' U2 L F2 (z)",
      "B2 U R2 U' R2 B2 D' R2 D R2",
      "R' U2 R2 U' L' U R' U' L U R' U2 R",
      "R U' L' U' L2 U' R2 U L2 U' R2 U2 L U R'",
      "(y') R U R' F' r U R' U' r' F R2 U' R'",
      "F U F' L' B L F' L' B' L F2 U' F'",
      "(y') r U r' U' r' F r2 U' r' U' r U r' F'",
      "B L B' U' B' U B2 L' B' U' B L B' L' U",
      "(y) R L D2 R' U' R D2 R' U L'",
      "B F D2 B' U' B D2 B' U F'",
      "(y') R U R' U' R' F R U R' U' R' F' R U R2 U' R'",
      "F U F' U' F' L F U F' U' F' L' F U F2 U' F'",
      "(y') R U R' U R2 D' R U' R' D R U R U' R U' R'",
      "F U F' U F2 D' F U' F' D F U F U' F U' F'",
      "B2 D B2 D' R2 B2 U' B2 U R2",
    ],
  },
  {
    name: 'Ab',
    primary: "(x) R D' R U2 R' D R U2 R2 (x')",
    edges: 'B B F L R B R F R F L L',
    group: 'Corners',
    arrows: '2-6>,6-8>,2>-8',
    type: 'PLL',
    algorithms: [
      "(x) R D' R U2 R' D R U2 R2 (x')",
      "(x') R U' R D2 R' U R D2 R2 (x)",
      "(y' x) R2 D2 R U R' D2 R U' R (x')",
      "(y2 x) L U' L D2 L' U L D2 L2 (x')",
      "R B' R F2 R' B R F2 R2",
      "(y z) U2 L' U2 L F2 U2 R U2 R' F2 (z')",
      "(z') F2 L' U2 L U2 F2 R U2 R' U2 (z)",
      "(y') R' U2 R U' L' U R U' L U R2 U2 R",
      "(y') R2 B2 R F R' B2 R F' R",
      "(y' x') R2 U2 R D R' U2 R D' R",
      "(y2) L F' L B2 L' F L B2 L2",
    ],
  },
  {
    name: 'E',
    primary: "(y x') (R U' R' D) (R U R' D') (R U R' D) (R U' R' D') (x)",
    edges: 'R B L B R F L F R F L B',
    group: 'Corners',
    arrows: '0>-2>,6>-8>',
    type: 'PLL',
    algorithms: [
      "(y x') (R U' R' D) (R U R' D') (R U R' D) (R U' R' D') (x)",
      "R2 U F' (R' U R U')3 F U' R2",
      "(y x') R' D R U' R' U2 R' U R D' R' U' R U2 R U x",
      "R2 U R' U' (y) (R U R' U')2 R U R' (y') R U' R2'",
      "(x) U R' U' L U R U' r2 U' R U L U' R' U (x)",
      "(y x') R U' R' D R U R' u2 R' U R D R' U' R (x')",
      "(y x') R U' R' D R U R' D2 L' U L D L' U' L (x)",
      "(x) U R' U' L U R U' L' U R U' L U R' U' L' (x')",
      "(x') U' R U L' U' R' U r2 U R' U' r' F R F'",
      "(y) R U R' U R' U' R F' R U R' U' R' F R2 U' R2 U R",
      "L R' U' R U L' U' R' U R r U R' U' r' F R F'",
      "l' U' L' U R U' l U R' U' L U R U' l' U (x')",
      "(y) r' R' U' L D' L' U L R U' R' D R U (x)",
      "(y) l L U R' D R U' R' r' F r D' L' U'",
      "r2 U r2 D (x') (R U' R' U)3 (x) D' r2 U' r2",
      "L' U' L' U R U' L U L (R' l') U' L U R U' L' U (x' y)",
      "R2 U R' (y) (R U' R' U)3 (y') R U' R2",
      "(y' z') R' F R2 U R' B' R U' R2 F' R (z) R B R'",
      "R' U L' D2 L U' R L' U R' D2 R U' L",
      "R B L B' R' (y) R L (y) L B' R' B L' (y') R' L'",
      "(y) l U' R' D R U R' D' R U R' D R U' R' D' x",
      "l' U' r' F R F' R U R' U' L U R U' R' F",
      "F' R U R' U' L' U R U' l' U R' U' r B R (x2)",
      "(z) U2 R2 F (R U R' U')3 F' R2 U2 (z')",
      "R' D' R U' R' D R U R' D' R U2 R' D R U' R' D' R U R' D R",
      "(y x') R' D R U' R' D' R U2 L D' L' U' L D L' (x)",
      "F R' F' r U R U' r' F R F' r U R' U' r'",
      "(x) R U' R' D R U R' D' R U R' D R U' R' D'",
      "D R' D2 F' D L D' F D2 R D' F' L' F",
      "l' U' L' U R U' L U R' U' L U R U' L' U (x')",
      "(y) R U R D R' U R D' R' U' R D R' U' R D' R2",
    ],
  },
  {
    name: 'F',
    primary: "y L R2 U R U R2 U' R' U' R2 U' R U2 L' U R'",
    edges: 'R B L B L R F F F L R B',
    group: 'Corners & Edges',
    arrows: '0>-2>,3>-5>',
    type: 'PLL',
    algorithms: [
      "y L R2 U R U R2 U' R' U' R2 U' R U2 L' U R'",
      "(y) R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R",
      "(y x) R' B' U' l U R' U' R' F R2 U' R' U' R U R' U R",
      "y2 R' U2 R' d' R' F' R2 U' R' U R' F R U' F ",
      "R' U R U' R2 F' U' F U R F R' F' R2 U'",
      "M' U2 L F' R U2 r' U r' R2 U2 R2",
      "(R' U R U') R2 (F' U' F U) (R F R' F') R2 U'",
      "y2 R U' R' U R U F R U R' U' x' D' R2 D R D' ",
      "y2 R U' R' U R U F R U R' U' x U' R2 U R U' ",
      "R' U R U' R2 (y') R' U' R U (y x) R U R' U' R2 (x')",
      "(y2) R' U2 R' d' R' F' R2 U' R' U R' F R U' F",
      "(y') F r2 R' U2 r U' r' U2 (x') R2 U' R' U r2 u' (z')",
      "B' U' R' B U B' U' B' R B2 U' B' U' B U B' U B",
      "(y) R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R",
      "L U' L' U L2 F U F' U' L' F' L F L2 U",
      "(y2) R U' R' U R2 (y) R U R' U' (x) U' R' U R U2 (x')",
      "(y' z) R U R' U' R U2 (z' y') R U R' U' (y' x') R' U' R U R2 (x)",
      "L F R' F' L' F' D2 B' L' B D2 F' R F2",
    ],
  },
  {
    name: 'Ga',
    primary: "(y) R2 U (R' U R' U') R U' R2 (D U' R' U) R D'",
    edges: 'F L B R R F L B L B F R',
    group: 'Corners & Edges',
    arrows: '0-8>,6>-8,0>-6,1-3>,3-7>,1>-7',
    type: 'PLL',
    algorithms: [
      "(y) R2 U (R' U R' U') R U' R2 (D U' R' U) R D'",
      "(y) R2' u (R' U R' U' R) u' R2 (y') R' U R",
      "(y) R2 U (R' U R' U' R) U' R2 D (U' R' U R) D'",
      "(y2) F2' D (R' U R' U' R) D' F2 L' U L",
      "R L U2 R' L' (y') R' U L' U2 R U' L",
      "R U2' R' U' F' R U R2 U' R' F R U R2 U2' R'",
      "(R U R' U' R') U F (R U R U' R') F' U R' U2 R",
      "(y2 z) U R U' R' U' R B U R U R' U' B' R U' R2 U (z' y2')",
      "(y) L F2 R (F' L' F U) R' U' (F' L F' L')",
      "(y) R2' S2 U l2' U' l2' u R2 U' r2' F2",
    ],
  },
  {
    name: 'Gb',
    primary: "R' U' R U D' R2 U R' U R U' R U' R2 D",
    edges: 'L F B R R L B L R F B F',
    group: 'Corners & Edges',
    arrows: '0-6>,6-8>,0>-8,1-7>,3>-7,1>-3',
    type: 'PLL',
    algorithms: [
      "R' U' R U D' R2 U R' U R U' R U' R2 D",
      "R' U' R (y) R2 u (R' U R U' R) u' R2",
      "(y) F' U' F R2 u (R' U R U' R) u' R2'",
      "(y2) R' U2 R U' F R U R' U' R' F' U' R U R U' R' (y2')",
      "R' U' R B2 D (L' U L U' L) D' B2",
      "(y2) L' U' L (y') R2' u (R' U R U' R) u' R2",
      "(y') R' U L' U2 R U' L (y) R L U2 L' R'",
      "R2 D L2 D F2 L D R' D2 L D' R' U2 ",
    ],
  },
  {
    name: 'Gc',
    primary: "(y) R2 U' R U' R U R' U R2 D' U R U' R' D",
    edges: 'B R F L F B R B R F L L',
    group: 'Corners & Edges',
    arrows: '2-6>,6-8>,2>-8,1-5>,5-7>,1>-7',
    type: 'PLL',
    algorithms: [
      "(y) R2 U' R U' R U R' U R2 D' U R U' R' D",
      "(y) R2' u' (R U' R U R') u R2 (y) R U' R'",
      "(y) R2' u' (R U' R U R') u R2 B U' B'",
      "(y) R2' U' (R U' R U R') U R2 (D' U R U' R' D)",
      "(y) R2' D' F U' F U F' D R2 B U' B'",
      "(y2) F2' D' L U' L U L' D F2 R U' R'",
      "L' U' L U L U' F' L' U' L' U L F U' L U2 L'",
      "(y2) R' U' R U R U' B' R' U' R' U R B U' R U2 R' (y2')",
      "(z) U' R' U R U R' F' U' R' U' R U F R' U R2 U' (z')",
      "L' R' U2 L R (y) L U' R U2 L' U R'",
      "B2 L2 U' B2 D B2 D' R2 U M2 F2 (x2)",
      "(y') R2' F2 R U2 R U2 R' F R U R' U' R' F R2",
      "(y') l' U2' L' U l F' U' L U F R' F R",
      "(y) U F2 R2 L2 U' L2 U L2 D' L2 D R2 F2 U'",
    ],
  },
  {
    name: 'Gd',
    primary: "(y2) R U R' U' D R2 U' R U' R' U R' U R2 D'",
    edges: 'B F R F B F L R B R L L',
    group: 'Corners & Edges',
    arrows: '2>-6,6>-8,2-8>,1-7>,5>-7,1>-5',
    type: 'PLL',
    algorithms: [
      "(y2) R U R' U' D R2 U' R U' R' U R' U R2 D'",
      "(y2) R U R' (y') R2 u' (R U' R' U R') u R2",
      "(y2) R U R' F2 D' (L U' L' U L') D F2",
      "(y2) L U2 L' U F' (L' U' L U L) F U (L' U' L' U L)",
      "R U2' R' U B' R' U' R U R B U R' U' R' U R",
      "(y2 z) U R2' U' R F' U' R' U R U F R U' R' U' R U (z' y2')",
      "(y2) l2 U' L2 U' F2 L' U' R U2 L' U l (x')",
      "(y) L U' R U2 L' U R' (y) R' L' U2 R L",
      "(y) f R f' R2 u' R U' R' U R' u R2",
      "(y') R' F' R F' U' L' U F R' F' L F2 R",
      "(y') R2' F' (R U R U') (R' F' R) (U2' R' U2' R') F2 R2",
      "(y z) U2 B' U R U R' U' B' U R2' U' R2 U' B2 U2' (z' y')",
      "(y2) (R U R') F2 D' L U' L' U L' D F2 U2",
    ],
  },
  {
    name: 'Ja',
    primary: "(y2) L U' R' U L' U2 R U' R' U2 R",
    edges: 'L B B R R R F L L B F F',
    group: 'Corners & Edges',
    arrows: '0>-6>,3>-7>',
    type: 'PLL',
    algorithms: [
      "(y2) L U' R' U L' U2 R U' R' U2 R",
      "U R U R' U' R' F R2 U' R' U2 R U R' F' R U R' U' R' F R F'",
      "(y) U R' U' R B R' U' R U l U' R2' F R (x)",
      "(y2) R' U2 R U R' U2' L U' R U L'",
      "L' U R' U2 L U' R U L' U R' U2 L U' R",
      "y2 R' U2 R U R' U2 L U' R U L'",
      "y2 x R2 F R F' R U2 r' U r U2 x'",
      "(y) (R' U L') U2 (R U' R') U2 R L",
      "(y2) F U' R U' R' U' R U R' F' R U R' U' R' F R U F'",
      "B2 R' U' R B2 L' D L' D' L2",
      "(y2) F2 L' U' L F2 R' D R' D' R2",
      "(y2) F2 L' U' L b2 L' U L' U' r2",
      "(y2) R' U2 R U R' (z) R2' U R' D R U' (z')",
      "(y2) R' U2' R U R' (z) R2 U R' D R U' (z')",
      "(z) D R' U' R D' R (R U R' U') R2 U (z')",
      "R U' L' U R' U2 L U' L' U2' L",
      "R' L' U2 L U L' U2 R U' L U",
    ],
  },
  {
    name: 'Jb',
    primary: "(y2) R' U L U' R U2' L' U L U2 L'",
    edges: 'B B R F F B R R F L L L',
    group: 'Corners & Edges',
    arrows: '2>-8>,5>-7>',
    type: 'PLL',
    algorithms: [
      "(y2) R' U L U' R U2' L' U L U2 L'",
      "R U R' F' R U R' U' R' F R2 U' R' U'",
      "R U2 R' U' R U2 L' U R' U' r x",
      "R U2 (R' U' R) U2 L' (U R' U') L",
      "(y) (R U' L) U2 (R' U R) U2 L' R'",
      "L' U R U' L U2 R' U R U2 R'",
      "B2 (L U L') B2 (R D' R D) R2",
      "(y2) F2 (R U R') F2 (L D' L D) L2",
      "(y2) F2 (R U R') b2 (R U' R U) l2'",
      "(y' x') L2 u L u' L2 (x' y) (L U' L U) r2",
      "(y2 x) U2 l U l' U2 r (U' L U) r2",
      "R U' L U2 R' U L' U' R U' L U2 R' U L'",
      "B2 U D' B2 U B2 U' B2 D B2 U' B2 U",
      "(y') L2 (U D') L2 U L2 U' L2 D L2 U' L2",
      "R U2 R' U' R U2 L' U R' U' L",
      "R2 U F U F' R2 F U' F' R2 U' R2 U'",
    ],
  },
  {
    name: 'Na',
    primary: "r' D r U2 r' D r U2 r' D r U2 r' D r U2 r' D r ",
    edges: 'B B F L L R F F B R R L',
    group: 'Corners & Edges',
    arrows: '2>-6>,3>-5>',
    type: 'PLL',
    algorithms: [
      "r' D r U2 r' D r U2 r' D r U2 r' D r U2 r' D r ",
      "R U R' U R U R' F' R U R' U' R' F R2 U' R' U2 R U' R'",
      "F' R U R' U' R' F R2 F U' R' U' R U F' R'",
      "R F U' R' U R U F' R2 F' R U R U' R' F",
      "(z) U' F R F' R' F' U F2' U R' F' R' F R U' F' (z')",
      "(z) B' U R U' R' U' B U2' B R' U' R' U R B' U' (z')",
      "(L U' R U2 L' U R')2 U'",
      "(z) (U R' D R2 U' R D')2 (z')",
      "(y z) R' (U R' D R2 U' R D')2 (z')",
      "(R U' L U2 R' U L')2",
      "(z) (D R' U R2 D' R U')2 (z')",
      "(z) U R' D R2 U' R U (z') R' U' R (z) R2 U' R (z') R'",
      "R U' L d2 L' U L R' U' R U2 r' F l'",
    ],
  },
  {
    name: 'Nb',
    primary: "(R' U L' U2 R U' L)2 U",
    edges: 'F B B R L L B F F L R R',
    group: 'Corners & Edges',
    arrows: '0>-8>,3>-5>',
    type: 'PLL',
    algorithms: [
      "(R' U L' U2 R U' L)2 U",
      "(z) (D' R U' R2' D R' U)2 (z')",
      "B R' U' R U R B' R2' B' U R U R' U' B R",
      "(x') U R' F' R F R U' R2' U' F R F R' F' U R (x)",
      "R' B' U R U' R' U' B R2 B R' U' R' U R B'",
      "(x') R' U' F R F' R' F' U R2' U R' F' R' F R U' (x)",
      "(z) U' F' (R U R' U' R' F) U2' F (U' R' U' R U F') (z')",
      "(z) B' U' R B R' B' R' U B2' U B' R' B' R B U' (z')",
      "(z) F U' R' U R U F' U2 F' R U R U' R' F U (z')",
      "R' U R U' R' F' U' F R U R' F R' F' R U' R ",
      "z D' R U' R2 D R' U D' R U' R2 D R' U z'",
      "(z) (U' R D' R2' U R' D)2 (z')",
      "z U' R D' R2 U R' D U' R D' R2 U R' D z'",
      "L' U R' d2 R U' L R' U L' U2 l F' r",
    ],
  },
  {
    name: 'Ra',
    primary: "(y') R U' R' U' R U R D R' U' R D' R' U2 R'",
    edges: 'B R B R B F L F R F L L',
    group: 'Corners & Edges',
    arrows: '1>-5>,6>-8>',
    type: 'PLL',
    algorithms: [
      "(y') R U' R' U' R U R D R' U' R D' R' U2 R'",
      "R U2 R' U2 R B' R' U' R U R B R2 U",
      "R U2 R' U2 R B' R' U' R U l U R2 (x)",
      "(y2 z) U R2 U' R2 U F' U' R' U R U F U2 (z')",
      "(y2) L U2 L' U2 L F' L' U' L U L F L2",
      "(y') R2 B' R' U' R' U R B R' U2 R U2 R'",
      "(y) L2 F' L' U' L' U L F L' U2 L U2 L'",
      "F2 R' F' U' F' U F R F' U2 F U2 F'",
      "(y' x') R2 U' l' U' R' U l U l' U2 R U2 R'",
      "(y') R l U' l' U' R' U l U l' U2 R U2' R'",
      "F2 L2 U F U F' U' F' U' L2 F' U F' U'",
      "R U' R F2 U R U R U' R' U' F2 R2 U",
      "(y') R2 F2 U R U R' U' R' U' F2 R' U R'",
      "(y') R U R' F' R U2 R' U2 R' F R U R U2 R' U'",
      "R U2 R' U' R' F' R U2 R U2 R' F R U' R' U",
    ],
  },
  {
    name: 'Rb',
    primary: "R' U2 R U2 R' F (R U R' U') R' F' R2' U'",
    edges: 'R B L B F R F R F L L B',
    group: 'Corners & Edges',
    arrows: '0>-2>,5>-7>',
    type: 'PLL',
    algorithms: [
      "R' U2 R U2 R' F (R U R' U') R' F' R2' U'",
      "R' U2 R U2 R' F (R U R' U') l' U' R2 (x')",
      "(z') U' L2 U L2 U' F U L U' L' U' F' U2 (z)",
      "R' U2 R U2 R' F R U R' U' R' F' R2",
      "R' U2 R' D' R U' R' D R U R U' R' U' R",
      "y' R U2 R' U2 R' F R2 U' R' U' R U R' F' R U R' U R U2 R'",
      "y R2 F R U R U' R' F' R U2 R' U2 R",
      "(y x) R2 U l U R U' l' U' l U2 R' U2 R",
      "(y') r' L' U r U L U' r' U' r U2 L' U2 L",
      "(y') L' U' L F L' U2 L U2 L F' L' U' L' U2 L U",
      "(y2) L' U2 L U L F L' U2 L' U2 L F' L' U L U'",
    ],
  },
  {
    name: 'T',
    primary: "R U R' U' R' F R2 U' R' U' R U R' F'",
    edges: 'B B R F L B R F F L R L',
    group: 'Corners & Edges',
    arrows: '3>-5>,2>-8>',
    type: 'PLL',
    algorithms: [
      "R U R' U' R' F R2 U' R' U' R U R' F'",
      "F R U' R' U R U R2 F' R U R U' R'",
      "R U R' U' R' F R2 U' R' U F' L' U L",
      "R2 U R2 U' R2 U' D R2 U' R2 U R2 D' ",
      "(y2) L' U' L U L F' L2 U L U L' U' L F",
    ],
  },
  {
    name: 'V',
    primary: "R' U R' U' B' R' B2 U' B' U B' R B R",
    edges: 'F R B R B L B F F L L R',
    group: 'Corners & Edges',
    arrows: '0>-8>,1>-5>',
    type: 'PLL',
    algorithms: [
      "R' U R' U' B' R' B2 U' B' U B' R B R",
      "R' U R' d' R' F' R2 U' R' U R' F R F",
      "R' U R' U' (y) R' F' R2 U' R' U R' F R F",
      "(y2 z) U' R U' R' F' U' F2 l' U' l F' U F U (z' y2')",
      "(y2 x) R U R U' B U' B' U2' R' U' B' R' B R' (x' y2')",
      "R' U R' U' B' l' (x2' y') U2 R' U' R (y) U' R U R (x)",
      "(z) D' R2 D R2 U R' D' R U' R U R' D R U'",
      "R U2 R' D R U' R U' R U R2 D R' U' R D2",
      "R' U R' U' R D' R' D R' U D' R2 U' R2 D R2",
    ],
  },
  {
    name: 'Y',
    primary: "R' U' R U' L R U2 R' U' R U2 L' U R2 U R",
    edges: 'F L B R R L B F F L B R',
    group: 'Corners & Edges',
    arrows: '0>-8>,1>-3>',
    type: 'PLL',
    algorithms: [
      "R' U' R U' L R U2 R' U' R U2 L' U R2 U R",
      "F R U' R' U' R U R' F' (R U R' U') (R' F R F')",
      "R2 U' R' U R U' x D' R' U R' U' R' D R ",
      "F R' F R2 U' R' U' R U R' F' R U R' U' F'",
      "R' U' R F2 R' U R d R2 U' R2' U' R2",
      "R2 U' R2 U' R2 U R' F' R U R2 U' R' F R ",
      "R2 U' R2 U' R2 d R U R' B2 R U' R'",
      "R2 U' R2 U' R2 U y' R U R' B2 R U' R'",
      "F2 D R2 U R2 D' R' U' R F2 R' U R",
      "(y') R2 u R2' U R2 D' R' U' R F2' R' U R",
    ],
  },
];

export default pllList;
