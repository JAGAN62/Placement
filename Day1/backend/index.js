const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.post("/user", (req, res) => {
  const {data} = req.body;
  res.json({
    status : 200,
    message: "Data received successfully",
    Feedback : data
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
