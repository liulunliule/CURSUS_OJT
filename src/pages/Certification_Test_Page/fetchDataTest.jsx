import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestions } from "../../redux/features/certificationTestPageSlice";

export const useFetchQuestions = () => {
  const dispatch = useDispatch();
  const questions = useSelector(
    (state) => state.certificationTestPage.questions
  );
  const status = useSelector((state) => state.certificationTestPage.status);
  const error = useSelector((state) => state.certificationTestPage.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchQuestions());
    }
  }, [status, dispatch]);

  return { questions, status, error };
};
