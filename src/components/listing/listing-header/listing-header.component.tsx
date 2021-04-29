import React from "react";
import styles from "./listing-header.module.css";

declare type ListingHeaderProps = {
  loading?: boolean;
  total: string;
};

const ListingHeader = ({ loading, total }: ListingHeaderProps): JSX.Element => {
  return loading ? (
    <></>
  ) : (
    <div className={styles.HeaderWrapper}>
      <span className={styles.Greeting}>{"Halo kak!"}</span>
      <span className={styles.TransactionInfo}>
        {"Kamu telah melakukan transaksi sebesar"}
        <span className={styles.TransactionValue}>{`Rp${total}`}</span>
        {"sejak menggunakan Flip."}
      </span>
    </div>
  );
};

const ListingHeaderMemo = React.memo(ListingHeader);

export { ListingHeaderMemo as ListingHeader };
