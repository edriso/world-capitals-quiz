import "dotenv/config";
import express from "express";
import pg from "pg";

const app = express();

app.get("/", (req, res) => {
  res.send("hey");
});

app.use("*", (req, res) => {
  res.send("<h3>Route not found</h3>");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
