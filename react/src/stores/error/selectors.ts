import type { RootState } from "..";

const errorSelector = (state: RootState) => state.error.error;

export default {
  errorSelector,
};
