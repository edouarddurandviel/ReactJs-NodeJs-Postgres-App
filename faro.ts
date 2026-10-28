import {
  ConsoleTransport,
  createReactRouterV6Options,
  FetchTransport,
  getWebInstrumentations,
  initializeFaro,
  LogLevel,
  ReactIntegration,
} from "@grafana/faro-react";
import {
  createRoutesFromChildren,
  matchRoutes,
  Routes,
  useLocation,
  useNavigationType,
} from "react-router-dom";

export const faro = initializeFaro({
  url: "http://localhost:12347/collect",
  app: {
    // metas
    name: "react-application",
    version: "1.0.0",
    environment: "development",
  },
  transports: [
    new FetchTransport({
      url: "http://localhost:12347/collect",

      // Optional, if your receiver requires an API key
      apiKey: "react-application",

      // Optional, if you want to customize how many requests to buffer
      bufferSize: 10,

      // Optional, if you want to customize how many requests to run in parallel
      concurrency: 5,

      // Optional, if you want to customize how long to wait before trying to resend the data
      defaultRateLimitBackoffMs: 1000,

      // Optional, if you want to customize the fetch options
      //   requestOptions: {
      //     headers: {
      //       'My-Header': 'My Header Value',
      //     },
      //   },
    }),
    new ConsoleTransport({
      // Optional, if you want to print the messages using console.debug instead of console.log
      level: LogLevel.DEBUG,
    }),
  ],
  instrumentations: [
    ...getWebInstrumentations(),
    new ReactIntegration({
      router: createReactRouterV6Options({
        createRoutesFromChildren,
        matchRoutes,
        Routes,
        useLocation,
        useNavigationType,
      }),
    }),
  ],
});
