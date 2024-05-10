const express = require("express")
const router = express.Router()

const conexion = require("./database/db")

router.get("/", (req, res) => {
  conexion.query("SELECT * FROM users", (error, result) => {
    if (error) {
      throw error;
    } else {
      res.render("index", { results: result }); 
    }
  });
});

module.exports = router;