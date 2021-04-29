import styles from "./status.module.css";

export const TransactionStatus = ({
  status,
}: {
  status: string;
}): JSX.Element => {
  let view = <div>{status}</div>;
  if (status === "SUCCESS") {
    view = <div className={styles.Success}>{"Berhasil"}</div>;
  } else if (status === "PENDING") {
    view = <div className={styles.Pending}>{"Pengecekan"}</div>;
  }

  return <div>{view}</div>;
};
