interface LocationInterface{
  hash: string;
  pathname: string;
  search: string;
  state: unknown;
}

interface HistoryInterface{
  action: string;
  // length?: number;
  location: LocationInterface;
}

interface RouterInterface{
  asPath: string;
  pathname: string;
  goBack?(): any;
  goForward?(): any;
  history?: HistoryInterface;
  query: any;
  isExact: boolean;
  push(to: string, state?: unknown): void;
  replace(to: string, state?: unknown): void;
  search: string;
  state: unknown;
}

export default RouterInterface;
