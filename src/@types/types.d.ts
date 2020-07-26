type SideNavRoute = {
  url: string;
  text: string;
  icon: string;
};

type AlgType = 'OLL' | 'PLL';

type AlgorithmData = {
  name: string;
  primary: string;
  faces?: string;
  edges: string;
  group: string;
  type: AlgType;
  arrows?: string;
  algorithms: Array<string>;
};

type UserAlgorithm = {
  id?: string;
  uid?: string;
  type: AlgType;
  name: string;
  primary: string;
  favorite: boolean;
};

type UserAlgorithmMap = { [key: string]: userAlgorithm };
