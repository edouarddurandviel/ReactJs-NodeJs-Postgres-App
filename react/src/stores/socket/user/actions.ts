import * as userType from "../../user/types";

export const subscribeAllUsers = () => {
  return {
    socket: true,
    message: `user`,
    type: userType.GET_ALL_USERS_REQUEST,
  };
};
export const unsubscribeAllUsers = () => {
  return {
    socket: true,
    message: `user`,
    type: userType.GET_ALL_USERS_REQUEST,
    leave: true,
  };
};

export const subscribeOneUser = (userId: string) => {
  return {
    socket: true,
    message: `user:${userId}`,
    type: userType.GET_ONE_USER_REQUEST,
  };
};
export const unsubscribeOneUser = (userId: string) => {
  return {
    socket: true,
    message: `user:${userId}`,
    type: userType.GET_ONE_USER_REQUEST,
    leave: true,
  };
};
