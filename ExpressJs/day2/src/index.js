import express from "express";

const app = express();
app.use(express.json());

const mockUsers = [
  { id: 1, name: "pranav", age: 18, gender: "male" },
  { id: 2, name: "raju", age: 20, gender: "male" },
  { id: 3, name: "priyanka", age: 25, gender: "female" },
  { id: 4, name: "shweta", age: 16, gender: "female" }
];

// HOME ROUTE
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

// GET all users
app.get("/api/users", (req, res) => {
  res.status(200).json(mockUsers);
});

// POST new user
app.post("/api/users", (req, res) => {
  return res.status(201)
});

// SERVER START (always last)
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
