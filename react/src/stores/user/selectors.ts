import type { RootState } from "..";

const usersSelector = (state: RootState) => state.user.users;
const userSelector = (state: RootState) => state.user.user;
const addUserSelector = (state: RootState) => state.user.addUser;
const filteredUsersSelector = (state: RootState) => state.user.filteredUsers;
const updateUserSelector = (state: RootState) => state.user.updateUser;
const profilSelector = (state: RootState) => state.user.profil;

const usersLoadingSelector = (state: RootState) => state.user.usersLoading;
const userLoadingSelector = (state: RootState) => state.user.userLoading;
const addUserLoadingSelector = (state: RootState) => state.user.addUserLoading;
const filteredUsersLoadingSelector = (state: RootState) => state.user.filteredUsersLoading;
const updateUserLoadingSelector = (state: RootState) => state.user.updateUserLoading;
const profilLoadingSelector = (state: RootState) => state.user.profilLoading;

const addUserSuccessSelector = (state: RootState) => state.user.addUserSuccess;

const usersErrorsSelector = (state: RootState) => state.user.usersErrors;
const addUserErrorsSelector = (state: RootState) => state.user.addUserErrors;
const updateUserErrorSelector = (state: RootState) => state.user.updateUserError;

export default {
  usersSelector,
  addUserSelector,
  usersLoadingSelector,
  addUserLoadingSelector,
  usersErrorsSelector,
  addUserErrorsSelector,
  filteredUsersSelector,
  filteredUsersLoadingSelector,
  addUserSuccessSelector,
  updateUserSelector,
  updateUserLoadingSelector,
  updateUserErrorSelector,
  userLoadingSelector,
  userSelector,
  profilSelector,
  profilLoadingSelector,
};
