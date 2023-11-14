import "dotenv/config";
import express from "express";
import pg from "pg";

const db = new pg.Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});
db.connect();

let quiz = [{ name: "Japan", flag: "🇯🇵" }];
db.query("SELECT * FROM flags", (err, res) => {
  if (err) {
    console.log("Error executing query", err.stack);
  } else {
    quiz = res.rows;
  }
  db.end();
});

let currentQuestion = {};
function nextQuestion() {
  const randomCountry = quiz[Math.floor(Math.random() * quiz.length)];
  currentQuestion = randomCountry;
}

const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

let totalCorrect = 0;
app.get("/", (req, res) => {
  totalCorrect = 0;
  nextQuestion();
  res.render("flags.ejs", { question: currentQuestion });
});

app.post("/submit", (req, res) => {
  const answer = req.body.answer.trim();
  let isCorrect = false;
  if (currentQuestion.name.toLowerCase() === answer.toLowerCase()) {
    totalCorrect++;
    isCorrect = true;
  }
  nextQuestion();
  res.render("flags.ejs", {
    question: currentQuestion,
    wasCorrect: isCorrect,
    totalScore: totalCorrect,
  });
});

app.use("*", (req, res) => {
  res.send("<h3>Route not found</h3>");
});

const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(`Server is running at http://localhost:${port}`)
);
