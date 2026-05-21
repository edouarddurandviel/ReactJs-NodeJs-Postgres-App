// Demonstration code purpose only
export const isEnv = (origin: string) => {
  const env = process.env.NODE_ENV;
  return env && env.toString().trim() === origin ? true : false;
};
