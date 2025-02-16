const express = require("express");
const path = require("path");

const { shopsHandler } = require("./shopsHandlers/shopsHandler");
const { rootDir } = require("../Utils/pathUtil");
const studentsHandler = express.Router();
studentsHandler.use(express.static(path.join(rootDir, "public")));

studentsHandler.use("/shops", shopsHandler);

exports.studentsHandler = studentsHandler;
