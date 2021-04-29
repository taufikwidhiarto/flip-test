import React from "react";
import { TransactionDto } from "../../types";
import styles from "./item.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { TransactionStatus } from "../status/status.component";

declare type TransactionItemProps = {
  loading?: boolean;
  item: TransactionDto;
};

const TransactionItem = ({
  loading,
  item,
}: TransactionItemProps): JSX.Element => {
  const amount = item.amount.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const date = new Date(item.created_at).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return loading ? (
    <div></div>
  ) : (
    <div className={styles.Item}>
      <div
        className={`${styles.Indicator} ${
          item.status === "SUCCESS" && styles.Success
        }`}
      ></div>
      <div className={styles.ItemContent}>
        <span className={styles.Bank}>
          {item.sender_bank.toUpperCase()}
          <FontAwesomeIcon className={styles.Gap} icon={faLongArrowAltRight} />
          {item.beneficiary_bank.toUpperCase()}
        </span>
        <span className={styles.beneficiaryName}>
          {item.beneficiary_name.toUpperCase()}
        </span>
        <span className={styles.AmountAndDate}>
          {amount}
          <div className={styles.Gap}>&#8226;</div>
          {date}
        </span>
      </div>
      <TransactionStatus status={item.status} />
    </div>
  );
};

const TransactionItemMemo = React.memo(TransactionItem);

export { TransactionItemMemo as TransactionItem };
