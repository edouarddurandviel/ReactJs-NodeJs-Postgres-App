
import express from "express";
import helmet from "helmet";
import crypto from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";

const app = express();
const dist = path.resolve("dist");
const reactIndexPath = path.join(dist, "index.html");


app.use((req, res, next) => {
    res.locals.nonce = crypto.randomBytes(32).toString("base64");
    next();
  },
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: [
          (_req, res) => `'nonce-${res.locals.nonce}'`,
          "'strict-dynamic'",
        ],
        scriptSrcAttr: ["'none'"],
        objectSrc: ["'none'"],
        baseUri: ["'none'"],
        frameAncestors: ["'none'"],
        formAction: ["'self'"],
        // styleSrc: [
        //   "'self'",
        //   (_req, res) => `'nonce-${res.locals.nonce}'`,
        // ],
        imgSrc: [
          "'self'", 
          "data:",
          "http://localhost:3000",
          "http://127.0.0.1:3000",
        ],
        fontSrc: ["'self'"],
        connectSrc: ["'self'", "http://localhost:3000", "ws://localhost:3000"], // change in production mode
      },
    },
  }),
  express.static(dist, {
    maxAge: "1y",
    immutable: true,
    index: [reactIndexPath],
    setHeaders(res, filePath) {
      if (filePath.includes(`${path.sep}assets${path.sep}`)) {
        res.setHeader("X-Content-Type-Options", "nosniff");
      }
    },
  })
);


// Servir index.html avec un nonce différent à chaque requête
app.get("/{*path}", async (req, res, next) => {
  try {
    const nonce = res.locals.nonce;
    const template = await fs.readFile(reactIndexPath, "utf8");
    const html = template.replaceAll("__CSP_NONCE__", nonce);

    res.setHeader("Cache-Control", "no-store");
    res.type("html").send(html);
  } catch (error) {
    next(error);
  }
});

const port = 5173;
app.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}`);
});
