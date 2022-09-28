import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export const usePagesCountSelector = () => {
  const pagesCount = useSelector(
    (state: RootState) => state.pagesCounter.pagesCount
  );
  return pagesCount;
};
