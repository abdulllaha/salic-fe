export interface ResponseWrapper<T> {
  value: T;
}

export interface User {
  id: number;
  name: string;
  email: string;
  title: string;
  otherId: {
    id: string;
    issuerId: string;
  };
  partName: string;
}
