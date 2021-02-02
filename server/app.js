import express from "express";
import cors from "cors";

const app = express();

const scores = [
  {
    playerName: "Alice",
    score: 20,
  },
  {
    playerName: "Bob",
    score: 19,
  },
  {
    playerName: "Charlie",
    score: 22,
  },
];

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});

const submitScore = async ({ playerName, score }) => {
  scores.push({
    playerName,
    score,
  });

  return true;
};

app.post("/submit-score", async (req, res) => {
  const submit = await submitScore(req.body);
  res.json(submit);
});

app.get("/scores", async (req, res) => {
  res.json(scores);
});
