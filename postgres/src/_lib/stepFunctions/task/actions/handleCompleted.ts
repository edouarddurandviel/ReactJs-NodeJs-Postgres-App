import { ROUTE_TASK } from "../config";
import event from "@libs/eventEmitter";

export const createEmitter = event.createEventEmitter();
export const handleCompleted = (incoming: any[]) => {
  const extract = incoming[0];
  console.log("Test completed:", extract);
};
