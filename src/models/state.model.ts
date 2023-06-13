export interface Cash {
  details: string;
  manicure: string;
  income: number;
  exit: number;
  credit: string;
  id?: string;
  key?: string;
}

export interface Clients {
  client: string;
  date: string;
  service: string;
  cellphone: number;
  id: string;
}

export interface User {
  email?: boolean | string;
}

export interface TodoState {
  db: Cash[];
  filtered: Cash[];
  clients: Clients[];
  user: User | any;
}

export interface TodoContextProps {
  stateApp: TodoState;
  dispatch: any;
  setSelected?: any;
  selected?: any;
}
