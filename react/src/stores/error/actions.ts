import * as actionType from "./types";

export const errorMessage = (data: any) => {
  return {
    type: actionType.ERROR_MESSAGE,
    payload: data,
  };
};

export const errorReset = (data: string[]) => {
  return {
    type: actionType.ERROR_MESSAGE_RESET,
    payload: data,
  };
};
