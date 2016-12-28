// Bank model based on the structure of mark1 api at
// http://127.0.0.1:8000/api/bank/{id}

export interface Bank {
  id: number;
  code: string;
  description: string;
}
