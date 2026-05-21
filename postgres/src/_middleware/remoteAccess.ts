import cors from "cors";
import remote from "../_config/remote";

export const remotePostAccess = () => {
  const whitelist = remote.domains;
  cors({
    origin: (origin: any, callback: any) => {
      if (whitelist && whitelist.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["POST"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
    maxAge: 3600
  });
};
