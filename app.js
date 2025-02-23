const express = require("express");
const path = require("path");
const { rootDir } = require("./Utils/pathUtil");
const { studentsHandler } = require("./controllers/studentsHandler");

const app = express();

app.use(express.static(path.join(rootDir, "public")));
app.set("view engine", "ejs");
app.set("views", "views");

app.use("/students", studentsHandler);
// app.use("/owners", ownersHandler);
app.use((req, res, next) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>404 Page Not Found</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Arial', sans-serif;
      background: linear-gradient(135deg, #ff6f61, #ff9a8b);
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    .error-container {
      text-align: center;
      color: white;
      background-color: rgba(0, 0, 0, 0.7);
      padding: 30px 40px;
      border-radius: 10px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
    }

    .error-code {
      font-size: 120px;
      font-weight: bold;
      margin-bottom: 20px;
    }

    .error-message {
      font-size: 20px;
      margin-bottom: 30px;
    }

    .home-link {
      font-size: 18px;
      color: #ff9a8b;
      text-decoration: none;
      padding: 10px 20px;
      border: 2px solid #ff9a8b;
      border-radius: 30px;
      transition: all 0.3s ease;
    }

    .home-link:hover {
      background-color: #ff9a8b;
      color: #fff;
      border-color: #ff6f61;
    }
  </style>
</head>
<body>
  <div class="error-container">
    <h1 class="error-code">404</h1>
    <p class="error-message">Oops! The page you're looking for either doesn't exist or is being under maintainence. please try again later</p>
    <a href="/students/shops" class="home-link">Go Back Home</a>
  </div>
</body>
</html>
`);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}/students/shops`);
});
