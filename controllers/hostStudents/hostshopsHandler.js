const { students } = require("../Models/DynamicData/Studentsdetails");
const { Shops } = require("../Models/StaticData/AllShops");
const express = require("express");
exports.getShops = (req, res, next) => {
  res.render("./index", { Shops: Shops });
};

exports.getbarbershops = (req, res, next) => {
  res.render("./barbershops");
};

exports.getiitdhbarber = (req, res, next) => {
  res.render("./barber");
};

exports.getiitdhbarberform = (req, res, next) => {
  res.render("./barberinput");
};
exports.getiitdhlist = (req, res, next) => {
  res.render("./list", { students });
};

exports.postiitdhbarberform = (req, res, next) => {
  students.push(req.body);
  res.render("./barberinputpost");
};
