import express from "express";
import path, { dirname } from "path";

// Reads PORT value from environment variable `PORT`.
// If not found, uses the default value of 3000.
const PORT = process.env.PORT || 3000;
const app = express();

// Define 'public' dir for static files (including HTML).
// Allows readable access from the browser.
const __dirname = path.dirname(new URL(import.meta.url).pathname);
app.use(express.static(path.join(__dirname, "public")));

// Start the server
app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
