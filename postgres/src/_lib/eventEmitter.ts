import EventEmitter from "node:events";

class InternalEventEmitter extends EventEmitter {
  constructor() {
    super();
    process.nextTick(() => {
      this.emit("init");
    });
  }
}

let eventEmitter: InternalEventEmitter;

export default {
  createEventEmitter: () => {
    if (!eventEmitter) {
      eventEmitter = new InternalEventEmitter();
    }
    eventEmitter.on("init", () => {
      console.log("[Internal] event emitter initialized");
    });
    return eventEmitter;
  },
  instance: () => {
    return eventEmitter;
  }
};
