import { URL } from "url";
import path, { dirname } from "path";
import express, { response } from "express";

// Initialize server & listen
// Reads PORT value from environment variable `PORT`, default value is 3000.
const PORT = process.env.PORT || 3000;
const app = express();
app.listen(PORT, () => console.log(`Server listening on post ${PORT}`));

// 1. GET / using express.static() middleware,
// serving static files (like HTML, CSS, or JS) from specified dir (here, "public")
const __dirname = path.dirname(new URL(import.meta.url).pathname);
app.use(express.static(path.join(__dirname, "public")));

// 1. GET / with explicit route handler
// app.get("/", (req, res) => {
//   console.log("serving index.html...");
//   res.sendFile(path.join(__dirname, "public", "/index.html"));
// });
