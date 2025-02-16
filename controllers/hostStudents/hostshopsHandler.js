exports.getShops = (req, res, next) => {
  res.render("./index");
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

exports.postiitdhbarberform = (req, res, next) => {
  res.render("./barberinputpost");
};
