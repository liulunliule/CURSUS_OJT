import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAddedCredits,
  fetchTransactions,
} from "../../redux/features/creditsSlice";

export const useFetchCreditsData = () => {
  const dispatch = useDispatch();
  const addedCredits = useSelector((state) => state.credits.addedCredits);
  const transactions = useSelector((state) => state.credits.transactions);
  const status = useSelector((state) => state.credits.status);
  const error = useSelector((state) => state.credits.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchAddedCredits());
      dispatch(fetchTransactions());
    }
  }, [status, dispatch]);

  return { addedCredits, transactions, status, error };
};
