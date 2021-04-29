import { ActionType, AppThunk } from "../state";
import { TransactionDto } from "../../types";
import * as api from "./transactions.api";

export const setLoading = (loading: boolean) =>
  ({
    type: "set-loading",
    loading,
  } as const);

export const addItems = (items: TransactionDto[]) =>
  ({
    type: "add-items",
    items,
  } as const);

export const setDisplayItems = (items: TransactionDto[]) =>
  ({
    type: "set-display-items",
    items,
  } as const);

export const addTotalAmount = (amount: number) =>
  ({
    type: "add-total-amount",
    amount,
  } as const);

export const loadTransactions = ({
  searchString,
  sortString,
}: {
  searchString?: string;
  sortString?: string;
}): AppThunk => async (dispatch, getState) => {
  dispatch(setLoading(true));

  try {
    const {
      transactions: { items },
    } = getState();
    if (items.length > 0) {
      let _filtered = items.filter(
        (trx) =>
          trx.beneficiary_name.toLowerCase().includes(searchString ?? "") ||
          trx.sender_bank.toLowerCase().includes(searchString ?? "") ||
          trx.beneficiary_bank.toLowerCase().includes(searchString ?? "")
      );
      dispatch(setDisplayItems(_filtered));
    } else {
      const _result = await api.fetchListing();
      _result && dispatch(addItems(_result));
      let _totalAmount = 0;
      _result.forEach((element) => {
        _totalAmount += element.amount;
      });
      dispatch(addTotalAmount(_totalAmount));
    }
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setLoading(false));
  }
};

export type TransactionActions =
  | ActionType<typeof setLoading>
  | ActionType<typeof addItems>
  | ActionType<typeof setDisplayItems>
  | ActionType<typeof addTotalAmount>;
