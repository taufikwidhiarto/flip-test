import { TransactionDto } from "../../types";

export interface TransactionState {
  loading: boolean;
  items: TransactionDto[];
  displayItems: TransactionDto[];
  totalAmount: number;
  detail: TransactionDto | undefined;
}

export const initialState: TransactionState = {
  loading: false,
  items: [],
  displayItems: [],
  totalAmount: 0,
  detail: undefined,
};
