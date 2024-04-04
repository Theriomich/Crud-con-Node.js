const express = require("express")
const router = express.Router()

const conexion = require("./database/db")

router.get("/", (req, res)=>{
  res.render("index")
//   conexion.query("SELECT * FROM users", (error, result)=>{
//     if(error){
//       throw error
//     }else{
//       res.send(result)
//     }
//   })
 })


module.exports= router;