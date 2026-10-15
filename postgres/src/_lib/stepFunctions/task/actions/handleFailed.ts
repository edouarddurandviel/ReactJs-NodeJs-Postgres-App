import { ROUTE_TASK } from "../config";
import eventEmitter from "@libs/eventEmitter";

export const handleFailed = (error: Error) => {
  console.error("Task failed:", error.message);
};
