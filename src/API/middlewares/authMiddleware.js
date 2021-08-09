const jwt = require("jsonwebtoken");
const config = require("../../../config");

// TODO
const basicAuthMiddleware = (req, res, next) => {
  const token = req.headers["x-access-token"];

  if (!token) return res.status(401).send("Access denied. No token provided.");

  try {
    // In a real service "config" would have been placed in a shared database.
    const decoded = jwt.verify(token, config.jwtSecert);
    req.role = decoded;
    //Check permission for role
    next();
  } catch (error) {
    res.status(400).send("Invalid token.");
  }
};

module.exports = basicAuthMiddleware;
