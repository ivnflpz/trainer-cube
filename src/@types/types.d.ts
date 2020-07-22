type SideNavRoute = {
    url: string;
    text: string;
    icon: string;
}

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
