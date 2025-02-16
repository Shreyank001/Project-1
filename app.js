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
  res.send("ERRoR 4o4 Page not found");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}/students/shops`);
});
