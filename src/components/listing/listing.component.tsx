import React from "react";
import { DropdownItemDto, FilterDto, TransactionDto } from "../../types";
import { FilterBox } from "../filter/filter-box.component";
import { TransactionItem } from "../item/item.component";
import { ListingHeader } from "./listing-header/listing-header.component";
import styles from "./listing.module.css";

declare type TransactionListingProps = {
  loading?: boolean;
  items: TransactionDto[];
  totalAmount: number;
  searchTerm?: string;
  onSearchChanged: (filter: Partial<FilterDto>) => void;
  sortItems: DropdownItemDto[];
  selectedSort?: string;
};

const TransactionListing = ({
  loading,
  items,
  totalAmount,
  searchTerm,
  onSearchChanged,
  sortItems,
  selectedSort,
}: TransactionListingProps): JSX.Element => {
  const transactionTotal = Number(totalAmount)
    .toLocaleString("id")
    .replace(",", ".");

  const listing = items.map((trx: TransactionDto, idx) => (
    <TransactionItem key={trx.id} item={trx} loading={loading} />
  ));

  return (
    <div className={styles.HeaderWrapper}>
      <ListingHeader loading={loading} total={transactionTotal} />
      <FilterBox
        searchTerm={searchTerm}
        onSearchChanged={onSearchChanged}
        sortItems={sortItems}
        selectedSort={selectedSort}
      />
      {listing}
    </div>
  );
};

const TransactionListingMemo = React.memo(TransactionListing);

export { TransactionListingMemo as TransactionListing };
