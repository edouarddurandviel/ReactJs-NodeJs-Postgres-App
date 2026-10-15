import event from "@libs/eventEmitter";
// TODO: should be islolated in a differand network events
// background jobs
// domain events
// !!!!!!!!!!! limitation memory and queues !!!!!!!!!!!
export const initEvent = event.createEventEmitter;
export const createRoute = (object: any, callcack: (object: any) => void) => {
  callcack(object);
};
