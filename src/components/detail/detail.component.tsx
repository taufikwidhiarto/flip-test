import { faInbox } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useHistory } from "react-router";
import { getCurrency, getDate } from "../../data/data.utils";
import { TransactionDto } from "../../types";
import { TransactionStatus } from "../status/status.component";
import styles from "./detail.module.css";

declare type TransactionDetailProps = {
  item: TransactionDto;
};

const TransactionDetail = ({ item }: TransactionDetailProps): JSX.Element => {
  const history = useHistory();

  const handleBack = (): void => {
    history.goBack();
  };

  return (
    <div className={styles.DetailWrapper}>
      <div className={styles.DetailHeader}>
        <span className={styles.HeaderText}>{`ID TRANSAKSI: #${item.id}`}</span>
        <TransactionStatus status={item.status} />
      </div>

      <div className={styles.ContentWrapper}>
        <div className={styles.ContentIcon}>
          <FontAwesomeIcon icon={faInbox} size={"3x"} />
        </div>
        <div className={styles.ContentItem}>
          <div className={styles.ItemWrapper}>
            <span className={styles.ItemTitle}>{"PENGIRIM"}</span>
            <span>{item.sender_bank}</span>
          </div>
          <div className={styles.ItemWrapper}>
            <span className={styles.ItemTitle}>{"PENERIMA"}</span>
            <span>{item.beneficiary_bank}</span>
            <span>{item.account_number}</span>
            <span>{item.beneficiary_name}</span>
          </div>
          <div className={styles.ItemWrapper}>
            <span className={styles.ItemTitle}>{"NOMINAL"}</span>
            <span>{getCurrency(item.amount)}</span>
          </div>
          <div className={styles.ItemWrapper}>
            <span className={styles.ItemTitle}>{"CATATAN"}</span>
            <span>{item.remark}</span>
          </div>
          <div className={styles.ItemWrapper}>
            <span className={styles.ItemTitle}>{"WAKTU DIBUAT"}</span>
            <span>{getDate(item.created_at)}</span>
          </div>
        </div>
      </div>

      <div>
        <button onClick={handleBack} className={styles.BackButton}>
          {"Kembali"}
        </button>
      </div>
    </div>
  );
};

const TransactionDetailMemo = React.memo(TransactionDetail);

export { TransactionDetailMemo as TransactionDetail };
