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
  },
  emit: (eventName: string, ...args: any[]) => {
    return eventEmitter.emit(eventName, args);
  },
  on: (eventName: string, listener: (...args: any[]) => void) => {
    console.info("Event name: " + eventName);
    return eventEmitter.on(eventName, listener);
  },
  once: (eventName: string, listener: (...args: any[]) => void) => {
    return eventEmitter.on(eventName, listener);
  },
  off: (eventName: string, listener: (...args: any[]) => void) => {
    return eventEmitter.off(eventName, listener);
  }
};
