const express = require("express")
const router = express.Router()



// Teste de rota
router.use("/", (req, res)=>{
  res.send("Rota promocao")
})


module.exports = router