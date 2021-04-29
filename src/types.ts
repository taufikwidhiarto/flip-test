import { type } from "node:os";

export type TransactionDto = {
  id: string;
  amount: number;
  unique_code: number;
  status: string;
  sender_bank: string;
  account_number: string;
  beneficiary_name: string;
  beneficiary_bank: string;
  remark: string;
  created_at: string;
  completed_at: string;
  fee: number;
};

export type DropdownItemDto = {
  id: number;
  value: string;
};

export type FilterDto = {
  search?: string;
  sort?: string;
};
