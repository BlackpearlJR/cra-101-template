interface Location{
  hash: string;
  pathname: string;
  search: string;
  state: unknown;
}

interface History{
  action: string;
  length: number;
  location: Location;
}

interface RouterInterface{
  asPath: string;
  pathname: string;
  goBack(): void;
  goForward(): void;
  push(path: string, state?: unknown): void;
  replace(path: string, state?: unknown): void;
  history: History;
  query: any;
  isExact: boolean;
  search: string;
  state: unknown;
}

export default RouterInterface;
