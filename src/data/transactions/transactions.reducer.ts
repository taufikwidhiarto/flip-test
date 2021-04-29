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
        displayItems: action.items,
      };
    case "add-total-amount":
      return {
        ...state,
        totalAmount: action.amount,
      };
    case "set-display-items":
      return {
        ...state,
        displayItems: action.items,
      };
    case "set-detail":
      const detail = state.displayItems.find((x) => x.id === action.trxId);
      return {
        ...state,
        detail,
      };
    default:
      return state;
  }
}
