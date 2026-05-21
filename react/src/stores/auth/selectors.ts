import type { RootState } from "..";

const authSelector = (state: RootState) => state.auth.user;

const authLoadingSelector = (state: RootState) => state.auth.userLoading;
const authSuccessSelector = (state: RootState) => state.auth.userSuccess;
const authErrorsSelector = (state: RootState) => state.auth.userErrors;

export default {
  authLoadingSelector,
  authSelector,
  authErrorsSelector,
  authSuccessSelector,
};
