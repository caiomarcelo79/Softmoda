const express = require("express")
const Promocao = require("../models/Promocao")
const router = express.Router()





// Listar
router.get("/listar", (req, res)=>{
  Promocao.findAll().then((promocao)=>{
    return res.status(201).json(promocao)
  }).catch((err) => {
    res.status(500).json({ error: "Erro ao buscar promocoes" })
  });
})

// Registrar
router.post("/registrar", (req, res)=>{
  Promocao.create({
    nome: req.body.nome,
    desconto: req.body.desconto,
    condicoes: req.body.condicoes,
    validade: req.body.validade
  }).then(()=>{
    res.status(201).json({ message: "Promocao registrada com sucesso" })
  }).catch(()=>{
    res.status(500).json({ error: "Erro ao registrar a promocao, verifique se os campos foram preenchidos corretamente" })
  })
})


module.exports = router