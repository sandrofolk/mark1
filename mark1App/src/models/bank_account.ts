// BankAccount model based on the structure of mark1 api at
// http://127.0.0.1:8000/api/bank_account/{id}

import {Bank} from "./bank";
export interface BankAccount {
  id: number;
  agency: string;
  account: string;
  digit: string;
  description: string;
  bank: Bank;
  bank_description: string;
}
