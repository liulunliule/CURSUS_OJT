import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews, fetchReleases } from "../../redux/features/pressSlice";

export const useFetchPressData = () => {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.press.news);
  const releases = useSelector((state) => state.press.releases);
  const status = useSelector((state) => state.press.status);
  const error = useSelector((state) => state.press.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchNews());
      dispatch(fetchReleases());
    }
  }, [status, dispatch]);

  return { news, releases, status, error };
};
