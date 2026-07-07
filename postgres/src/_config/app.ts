import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import sequelize from "../models";
import path from "node:path";

const app = express();
app.disable("x-powered-by");

app.use(
  helmet({
    crossOriginResourcePolicy: {
      policy: "cross-origin"
    }
  })
);
// `cross scripting
// Content-Security-Policy:
// default-src 'self';
// base-uri 'self';
// font-src 'self' https: data:;
// form-action 'self';
// frame-ancestors 'self';
// img-src 'self' data:;
// object-src 'none';
// script-src 'self';
// script-src-attr 'none';
// style-src 'self' https: 'unsafe-inline';
// upgrade-insecure-requests`

// X-Content-Type-Options: nosniff (hide content-type)
// X-Download-Options: noopen (unsafe downloads)
// X-Frame-Options: SAMEORIGIN (old browsers click jacking) overheaded by frame-ancestors Content Security Policy
// X-Permitted-Cross-Domain-Policies: none
// X-XSS-Protection: 0

app.use(cookieParser());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// serve images
app.use("/uploads", express.static(path.join(__dirname, "../../uploads")));

const origin = process.env.REACT_API_PORT;
app.use(
  cors({
    origin: `http://localhost:${origin}`, // allow frontend origin
    credentials: true
  })
);
app.use(bodyParser.json());
app.use(morgan("dev"));

// check sequelize connection
sequelize.init();

export default app;
