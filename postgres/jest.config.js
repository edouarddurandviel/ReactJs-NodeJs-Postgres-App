const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  preset: "@shelf/jest-mongodb",
  testEnvironment: "node",
  transform: {
    ...tsJestTransformCfg
  },
  globals: {
    __DEV__: true
  }
};
