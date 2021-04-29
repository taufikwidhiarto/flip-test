import { TransactionDto } from "../../types";

export interface TransactionState {
  loading: boolean;
  items: TransactionDto[];
  displayItems: TransactionDto[];
  totalAmount: number;
}

export const initialState: TransactionState = {
  loading: false,
  items: [],
  displayItems: [],
  totalAmount: 0,
};
