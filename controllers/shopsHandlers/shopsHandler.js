const express = require("express");
const path = require("path");

const {
  getShops,
  getbarbershops,
  getiitdhbarber,
  getiitdhbarberform,
  postiitdhbarberform,
} = require("../hostStudents/hostshopsHandler");
const { rootDir } = require("../../Utils/pathUtil");
const shopsHandler = express.Router();
shopsHandler.use(express.static(path.join(rootDir, "public")));

shopsHandler.get("/", getShops);
shopsHandler.get("/barbershops", getbarbershops);
shopsHandler.get("/barbershops/iitdhbarber", getiitdhbarber);
shopsHandler.get(
  "/barbershops/iitdhbarber/appointmentform",
  getiitdhbarberform
);

shopsHandler.post(
  "/barbershops/iitdhbarber/appointmentform",
  postiitdhbarberform
);

exports.shopsHandler = shopsHandler;
