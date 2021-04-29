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
    case "update-filter":
      const items = state.items;
      const filter = action.filter;
      let _filtered = items.filter(
        (trx) =>
          trx.beneficiary_name.toLowerCase().includes(filter?.search ?? "") ||
          trx.sender_bank.toLowerCase().includes(filter?.search ?? "") ||
          trx.beneficiary_bank.toLowerCase().includes(filter?.search ?? "")
      );
      _filtered.sort((a, b) => {
        if (filter?.sort === "Nama A-Z") {
          return a.beneficiary_name > b.beneficiary_name ? 1 : -1;
        } else if (filter?.sort === "Nama Z-A") {
          return a.beneficiary_name < b.beneficiary_name ? 1 : -1;
        } else if (filter?.sort === "Tanggal terbaru") {
          return a.created_at < b.created_at ? 1 : -1;
        } else if (filter?.sort === "Tanggal terlama") {
          return a.created_at > b.created_at ? 1 : -1;
        } else {
          return 1;
        }
      });
      return {
        ...state,
        displayItems: _filtered,
      };
    default:
      return state;
  }
}
