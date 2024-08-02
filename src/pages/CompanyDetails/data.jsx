import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOffices } from "../../redux/features/officesSlice";

export const useFetchOffices = () => {
  const dispatch = useDispatch();
  const offices = useSelector((state) => state.offices.offices || []);
  const status = useSelector((state) => state.offices.status);
  const error = useSelector((state) => state.offices.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchOffices());
    }
  }, [status, dispatch]);

  return { offices, status, error };
};
