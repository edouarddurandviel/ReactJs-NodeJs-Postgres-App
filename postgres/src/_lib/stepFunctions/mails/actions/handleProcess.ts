import { Incoming, ROUTE_MAILS } from "../config";
import event from "@libs/eventEmitter";

export const handleProcess = (incoming: Incoming) => {
  const extracted: {} = incoming[0];

  // create mutation
  const freezedDeepClone = Object.freeze(
    structuredClone(Object.assign(extracted, { currentDate: new Date() }))
  );

  // send immutable
  event.emit(ROUTE_MAILS.COMPLETED, freezedDeepClone);
};
