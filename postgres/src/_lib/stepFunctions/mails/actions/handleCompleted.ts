import { ROUTE_MAILS } from "../config";
import event from "@src/_lib/eventEmitter";

export const createEmitter = event.createEventEmitter();
export const handleCompleted = (incoming: any[]) => {
  const extract = incoming[0];
  console.log("mail completed:", extract);
};
