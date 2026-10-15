import event from "@libs/eventEmitter";
import { handleGet } from "./actions/handleGet";
import { handleProcess } from "./actions/handleProcess";
import { handleCompleted } from "./actions/handleCompleted";
import { handleFailed } from "./actions/handleFailed";

export const mailsStepFunction = (object: any) => {
  event.on(object.GET, handleGet);
  event.on(object.PROCESS, handleProcess);
  event.once(object.COMPLETED, handleCompleted);
  event.once(object.FAILED, handleFailed);
};
