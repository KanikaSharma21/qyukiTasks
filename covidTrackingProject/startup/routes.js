const express = require("express");
const states = require("../routes/states");
const reqLogger = require("../startup/logger");

module.exports = function (app) {
  app.use(express.json());
  app.use(reqLogger);
  app.use("/api/v1/states", states);
};
