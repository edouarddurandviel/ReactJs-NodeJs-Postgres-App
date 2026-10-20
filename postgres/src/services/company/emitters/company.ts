import eventEmitter from "@src/_lib/eventEmitter";

const task = (
  eventName: string,
  params: {
    instruction: string;
    from: string;
    data: number;
  }
) => {
  return eventEmitter.emit(eventName, params);
};

const mail = (
  eventName: string | "mail",
  params: {
    userId: number;
  }
) => {
  return eventEmitter.emit(eventName, params);
};

export default {
  task,
  mail
};
