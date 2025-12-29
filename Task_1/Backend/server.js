const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const filepath = path.resolve(__dirname, "data.json");

const readData = () => {
  try {
    const data = fs.readFileSync(filepath, "utf-8");
    return JSON.parse(data) || [];
  } catch (err) {
    console.log(err.message);
    return [];
  }
};

const writeData = (data) => {
  try {
    fs.writeFileSync(filepath, JSON.stringify(data, null, 2));
  } catch (e) {
    console.log(e.message);
  }
};

app.get("/users", (req, res) => {
  res.json(readData());
});

app.post("/register", (req, res) => {
  const { name, email, age, hobbies } = req.body;
  if(age<10){
    alert("Age must be greate than 10")
    return;
  }

  if (!name || !email || !age || !Array.isArray(hobbies) || hobbies.length === 0) {
    alert("Invalid Details");
    return; // ⛔ STOP execution
  }

  const data = readData();
  const newUser = {id: data.length + 1,name,email,age,hobbies};
  data.push(newUser);
  writeData(data);

  res.status(201).json({
    message: "User registered successfully",
    user: newUser,
  });
});

app.listen(PORT, () =>
  console.log(`Server is running on port ${PORT}`)
);
