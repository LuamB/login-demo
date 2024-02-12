import { URL } from "url";
import path, { dirname } from "path";
import express, { response } from "express";

// Defines port on which my server listens for requests
// from environment variable `PORT`; defaults to 3000
const PORT = process.env.PORT || 3000;

// Creates instance of app to define routes, middleware etc.
const app = express();

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Start server
app.listen(PORT, () => console.log(`Server listening on post ${PORT}`));

// Get absolute path of current file
const __dirname = path.dirname(new URL(import.meta.url).pathname);

// 1. GET / using express.static() middleware, serving static files
// (like HTML, CSS, or JS) from specified directory (here, "public")
app.use(express.static(path.join(__dirname, "public")));

// 1. GET / with explicit route handler
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// 2. GET /echo/:message
app.get("/echo/:message", (req, res) => {
  const msg = req.params.message;

  // Define response based on message
  let resMsg;
  if (msg === "secret") {
    resMsg = "the secret is... 42!";
  } else {
    resMsg = msg;
  }

  // Send response
  res.json(resMsg);
});

// 3. GET /login
app.get("/login", (req, res) => {
  console.log("serving login.html...");
  res.sendFile(path.join(__dirname, "public", "login.html"));
});

// 4. POST /login
app.post("/login", (req, res) => {
  // const { email, password } = req.body;
  const email = req.body["email"];
  const password = req.body["password"];

  console.log("Extracted email and password:", email, password);

  // Validation: missing or empty fields?
  if (!email && !password) {
    return res.json({
      success: false,
      message: "Please provide both email and password",
    });
  }
  // Simulate authentication
  if (email !== "user@email.com" && password !== "very-secret") {
    return res.json({ succes: false, message: "Invalid email or password" });
  } else {
    return res.json({ succes: true, message: "Congrats, you're in!" });
  }
});

// 5. GET /my-account
app.get("/my-account", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "my-account.html"));
});

// 6. GET /error
app.get("/error", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "error.html"));
});
