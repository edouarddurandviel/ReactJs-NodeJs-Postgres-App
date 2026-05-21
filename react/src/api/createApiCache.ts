import apiCache from "./apiCache";
let cache: any;

export default {
  createApiCache: () => {
    if (!cache)
      cache = new apiCache({
        whitelist: ["company", "one"],
      });
    return cache;
  },
  getInstance: () => {
    return cache;
  },
};
