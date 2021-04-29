import { TransactionDto } from "../../types";

export interface TransactionState {
  loading: boolean;
  items: TransactionDto[];
}

export const initialState: TransactionState = {
  loading: false,
  items: [],
};
