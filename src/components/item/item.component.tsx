import React from "react";
import { TransactionDto } from "../../types";
import styles from "./item.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { TransactionStatus } from "../status/status.component";
import { useHistory } from "react-router";
import { getCurrency, getDate } from "../../data/data.utils";

declare type TransactionItemProps = {
  loading?: boolean;
  item: TransactionDto;
};

const TransactionItem = ({
  loading,
  item,
}: TransactionItemProps): JSX.Element => {
  const history = useHistory();

  const handleClick = (): void => {
    history.push(`/detail/${item.id}`);
  };

  return loading ? (
    <div></div>
  ) : (
    <div className={styles.Item} onClick={handleClick}>
      <div
        className={`${styles.Indicator} ${
          item.status === "SUCCESS" && styles.Success
        }`}
      ></div>
      <div className={styles.ItemContent}>
        <span className={styles.Bank}>
          {item.sender_bank}
          <FontAwesomeIcon className={styles.Gap} icon={faLongArrowAltRight} />
          {item.beneficiary_bank}
        </span>
        <span className={styles.beneficiaryName}>{item.beneficiary_name}</span>
        <span className={styles.AmountAndDate}>
          {getCurrency(item.amount)}
          <div className={styles.Gap}>&#8226;</div>
          {getDate(item.created_at)}
        </span>
      </div>
      <div className={styles.StatusWrapper}>
        <TransactionStatus status={item.status} />
      </div>
    </div>
  );
};

const TransactionItemMemo = React.memo(TransactionItem);

export { TransactionItemMemo as TransactionItem };
