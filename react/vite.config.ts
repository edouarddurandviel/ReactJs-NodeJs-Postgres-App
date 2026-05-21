import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import checker from "vite-plugin-checker";
//import babel from 'vite-plugin-babel';

// React Compiler is a compiler that optimizes React applications,
// ensuring that only the minimal parts of components and hooks will re-render when state changes.
// The compiler also validates that components and hooks follow the Rules of React.
export default defineConfig({
  server: {
    port: 5173,
  },
  preview: {
    port: 5173,
  },
  plugins: [
    react({
      babel: {
        plugins: ["babel-plugin-react-compiler"],
      },
    }),
    checker({
      typescript: true,
    }),
    ///babel()
  ],
});
