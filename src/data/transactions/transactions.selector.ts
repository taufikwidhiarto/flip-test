import { createSelector } from "reselect";
import { AppState } from "../state";
import { TransactionState } from "./transactions.state";

export const getTransactionState = (state: AppState): TransactionState =>
  state.transactions;

export const isLoading = createSelector(
  getTransactionState,
  (trx) => trx.loading
);
export const getItems = createSelector(getTransactionState, (trx) => trx.items);
