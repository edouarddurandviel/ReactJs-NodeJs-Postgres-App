export default class apiCache {
  config;
  cache;

  constructor(config: { whitelist: string[] }) {
    this.config = config;
    this.cache = new Map();
  }

  getCache = (key: any) => {
    return this.cache.get(key);
  };

  deleteCache = (key: any) => {
    this.cache.delete(key);
  };

  hasCache = (key: any) => {
    this.cache.has(key);
  };

  manageRequest = async (key: any, config: any) => {
    const fromUri = key.split("/");
    const whiteListed = this.config.whitelist.filter((w: string) => fromUri.includes(w));

    if (whiteListed.length === 0) {
      return false;
    } else {
      if (this.cache.has(key) && !this.cache.has("operation")) {
        return true;
      } else if (config.method !== "get") {
        this.cache.set("operation", true);
        return false;
      }
    }
  };

  manageResponse = async (resp: any) => {
    if (resp && resp.config.method === "get") {
      if (this.cache.has("operation")) {
        this.cache.delete("operation");
      }
      this.cache.set(resp.config.url, resp.data);

      return resp;
    } else {
      this.cache.set("operation", true);
      return resp;
    }
  };
}
