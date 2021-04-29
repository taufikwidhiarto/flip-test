import { TransactionDto } from "../../types";

export async function fetchListing(): Promise<TransactionDto[]> {
  return fetch("https://nextar.flip.id/frontend-test")
    .then((response) => response.json())
    .then((items) => {
      return new Promise((resolve) => {
        const listing: TransactionDto[] = Object.keys(items).map((idx) => {
          return items[idx];
        });
        return resolve(listing);
      });
    });
}
