import type { PathParamsObject, QueryObject } from "./interfaces";

// optimized
const getParam = (path: string): string[] => {
  const result: string[] = [];
  let start = -1;

  for (let i = 0; i < path.length; i++) {
    const char = path[i];

    if (char === ":") {
      start = i + 1;
    } else if (start !== -1 && char === "/") {
      result.push(path.slice(start, i));
      start = -1;
    }
  }

  if (start !== -1) {
    result.push(path.slice(start));
  }

  return result;
};

// optimized
const verifyParams = (params: string[], receivedParams: PathParamsObject): PathParamsObject => {
  const result: PathParamsObject = {};

  for (let i = 0; i < params.length; i++) {
    const key = params[i];
    if (key) result[key] = key in receivedParams ? receivedParams[key]! : "";
  }

  return result;
};

// optimized
const createUrl = (path: string, buildParams: PathParamsObject): string => {
  let newPath = path;
  for (const key in buildParams) {
    const value = buildParams[key];
    if (value !== undefined) {
      newPath = newPath.replace(`:${key}`, String(value));
    }
  }
  return newPath;
};

// optimized
const serialize = (query: QueryObject): string => {
  const queryString = new URLSearchParams(query as Record<string, string>).toString();
  return queryString ? `?${queryString}` : "";
};

export const urlBuilder = (
  path: string,
  params?: PathParamsObject,
  query?: QueryObject,
): string => {
  const Params = getParam(path);
  let serialized: string | null = null;
  if (query) {
    serialized = serialize(query);
  }

  if (params) {
    const verifiedParamObject = verifyParams(Params, params);

    return !serialized ? createUrl(path, verifiedParamObject) : `${path}${serialized}`;
  } else {
    return !serialized ? path : `${path}${serialized}`;
  }
};
