import { ROUTE_TASK } from "../config";
import eventEmitter from "@src/_lib/eventEmitter";

export const handleFailed = (error: Error) => {
  console.error("Task failed:", error.message);
};
