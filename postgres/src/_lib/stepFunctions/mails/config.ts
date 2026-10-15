export const ROUTE_MAILS = Object.freeze({
  GET: "mail",
  PROCESS: "mail:process",
  COMPLETED: "mail:completed",
  FAILED: "mail:failed"
});

export type Incoming = Array<{
  email: string;
  data: any;
  createdAt: Date;
}>;
