import { ROUTE_MAILS } from "../config";
import event from "@src/_lib/eventEmitter";
import * as userActions from "@src/services/user/actions";

type Email = {
  userId: string;
};

export const handleGet = async (incoming: Email[]) => {
  const extracted = incoming[0];
  console.log("Test received:" + extracted);

  const user = await userActions.getOneUser(extracted.userId);

  event.emit(ROUTE_MAILS.PROCESS, user);
};
