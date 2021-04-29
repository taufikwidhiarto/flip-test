import { createSelector } from "reselect";
import { AppState } from "../state";
import { TransactionState } from "./transactions.state";

export const getTransactionState = (state: AppState): TransactionState =>
  state.transactions;

export const isLoading = createSelector(
  getTransactionState,
  (trx) => trx.loading
);

export const getDisplayItems = createSelector(
  getTransactionState,
  (trx) => trx.displayItems
);

export const getTotalAmount = createSelector(
  getTransactionState,
  (trx) => trx.totalAmount
);

export const getDetail = createSelector(
  getTransactionState,
  (trx) => trx.detail
);
