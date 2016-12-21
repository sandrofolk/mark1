// Person model based on the structure of mark1 api at
// http://127.0.0.1:8000/api/person/{id}

export interface Person {
  id: number;
  name: string;
  client: boolean;
  provider: boolean;
}
