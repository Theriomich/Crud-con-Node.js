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

//RUTA PARA CREAR REGISTROS
router.get("/create", (req,res)=> {
  res.render("create")
})

//RUTA PARA EDITAR REGISTROS
router.get('/edit/:id', (req,res)=>{    
  const id = req.params.id;
  conexion.query('SELECT * FROM users WHERE id=?',[id] , (error, results) => {
      if (error) {
          throw error;
      }else{            
          res.render('edit.ejs', {user:results[0]});            
      }        
  });
});

const crud = require("./controllers/crud")
router.post("/save", crud.save)
router.post("/update", crud.update)

module.exports = router;