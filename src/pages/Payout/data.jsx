import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchNextPayout,
  fetchTransactions,
} from "../../redux/features/payoutSlice";

export const useFetchPayoutData = () => {
  const dispatch = useDispatch();
  const nextPayout = useSelector((state) => state.payout.nextPayout);
  const transactions = useSelector((state) => state.payout.transactions);
  const status = useSelector((state) => state.payout.status);
  const error = useSelector((state) => state.payout.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchNextPayout());
      dispatch(fetchTransactions());
    }
  }, [status, dispatch]);

  return { nextPayout, transactions, status, error };
};
