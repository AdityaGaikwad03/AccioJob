const express = require("express");
const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json(); // ARRAY

    let cards = "";

    data.forEach(todo => {
      cards += `
        <div class="card">
          <h3>Todo ID: ${todo.id}</h3>
          <p><b>Title:</b> ${todo.title}</p>
          <p><b>Completed:</b> ${todo.completed}</p>
        </div>
      `;
    });

    res.send(`
      <html>
        <head>
          <title>Todos</title>
          <style>
            body {
              font-family: Arial;
              background: #f4f4f4;
              padding: 40px;
            }
            .container {
              display: grid;
              grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
              gap: 20px;
            }
            .card {
              background: white;
              padding: 15px;
              border-radius: 8px;
              box-shadow: 0 0 10px rgba(0,0,0,0.1);
            }
          </style>
        </head>
        <body>
          <h1>Todo List</h1>
          <div class="container">
            ${cards}
          </div>
        </body>
      </html>
    `);

  } catch (error) {
    res.status(500).send("Error fetching data");
  }
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
