// Category model based on the structure of mark1 api at
// http://127.0.0.1:8000/api/category/{id}

export interface Category {
  id: number;
  description: string;
  parent: Category;
  parent_description: string;
}
