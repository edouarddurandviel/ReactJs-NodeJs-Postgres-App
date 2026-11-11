import apiCache from "./apiCache";
let cache: any;

export default {
  createApiCache: () => {
    if (!cache)
      cache = new apiCache({
        whitelist: ["one", "company"],
      });
    return cache;
  },
  init: () => {
    return cache;
  },
};
