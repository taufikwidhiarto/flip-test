import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TransactionListing } from "../../components/listing/listing.component";
import { SortItems } from "../../components/listing/listing.utils";
import { loadTransactions } from "../../data/transactions/transactions.actions";
import {
  getDisplayItems,
  getTotalAmount,
  isLoading,
} from "../../data/transactions/transactions.selector";
import { FilterDto } from "../../types";
import styles from "./listing.page.module.css";

const ListingPage = (): JSX.Element => {
  const dispatch = useDispatch();
  const loading = useSelector(isLoading);
  const items = useSelector(getDisplayItems);
  const totalAmount = useSelector(getTotalAmount);

  const [filter, setFilter] = useState<FilterDto>();

  useEffect(() => {
    dispatch(loadTransactions());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = (update: FilterDto) => {
    const newState = { ...filter, ...update };
    setFilter(newState);
    dispatch(loadTransactions(newState));
  };

  return (
    <div className={styles.ListingPage}>
      <h1 className={styles.Title}>{"Daftar Transaksi"}</h1>
      <TransactionListing
        loading={loading}
        items={items}
        totalAmount={totalAmount}
        searchTerm={filter?.search}
        onSearchChanged={handleSearch}
        sortItems={SortItems}
        selectedSort={filter?.sort}
      />
    </div>
  );
};

const ListingPageMemo = React.memo(ListingPage);

export { ListingPageMemo as ListingPage };
