export interface nodeType {
  id: string;
  group: string;
}

export interface linkType {
  id?: number;
  source: string;
  target: string;
}

export interface dataType {
  nodes: nodeType[];
  links: linkType[];
}

export interface simulationLinkType {
  index?: number;
  source: {
    group: string;
    id: string;
    index: number;
    vx: number;
    vy: number;
    x: number;
    y: number;
  };
  target: {
    group: string;
    id: string;
    index: number;
    vx: number;
    vy: number;
    x: number;
    y: number;
  };
};