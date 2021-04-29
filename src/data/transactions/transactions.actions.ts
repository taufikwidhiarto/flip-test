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

export const loadTransactions = (): AppThunk => async (dispatch) => {
  dispatch(setLoading(true));

  try {
    const _result = await api.fetchListing();
    _result && dispatch(addItems(_result));
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setLoading(false));
  }
};

export type TransactionActions =
  | ActionType<typeof setLoading>
  | ActionType<typeof addItems>;
