// CostCenter model based on the structure of mark1 api at
// http://127.0.0.1:8000/api/cost_center/{id}

export interface CostCenter {
  id: number;
  description: string;
  revenue: boolean;
  cost: boolean;
}
