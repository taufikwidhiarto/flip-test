import { TransactionActions } from "./transactions.actions";
import { initialState, TransactionState } from "./transactions.state";

export function transactionsReducer(
  state: TransactionState = initialState,
  action: TransactionActions
): TransactionState {
  switch (action.type) {
    case "set-loading":
      return {
        ...state,
        loading: action.loading,
      };
    case "add-items":
      return {
        ...state,
        items: action.items,
      };
    default:
      return state;
  }
}
