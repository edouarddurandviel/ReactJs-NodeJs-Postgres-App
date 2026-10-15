export const ROUTE_TASK = Object.freeze({
  GET: "task",
  PROCESS: "task:process",
  COMPLETED: "task:completed",
  FAILED: "task:failed"
});

export type Incoming = Array<{
  instruction: string;
  from: string;
  data: Date;
}>;
