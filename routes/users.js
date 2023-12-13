const express = require("express");
const router = express.Router();
const usersList = [];
router.post("/users", (req, res, next) => {
  usersList.push(req.body);
  res.redirect("/");
});
router.get("/users", (req, res, next) => {
  res.render("users", { pageTitle: "Users", usernames: usersList });
});

module.exports = {
  route: router,
  users: usersList,
};
