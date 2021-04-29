import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router";
import { TransactionDetail } from "../../components/detail/detail.component";
import { setDetailByID } from "../../data/transactions/transactions.actions";
import { getDetail } from "../../data/transactions/transactions.selector";
import styles from "./detail.page.module.css";

export interface DetailPageParams {
  id: string;
}

const DetailPage = (): JSX.Element => {
  const match = useRouteMatch<DetailPageParams>();

  const dispatch = useDispatch();
  const detail = useSelector(getDetail);

  useEffect(() => {
    match && match.params.id && dispatch(setDetailByID(match.params.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return detail ? (
    <div className={styles.DetailPage}>
      <h1 className={styles.Title}>{"Detail Transaksi"}</h1>
      <TransactionDetail item={detail} />
    </div>
  ) : (
    <>{"Item not found"}</>
  );
};

const DetailPageMemo = React.memo(DetailPage);

export { DetailPageMemo as DetailPage };
