const express = require("express")
const Fornecedor = require("../models/Fornecedor")
const router = express.Router()





// Listar
router.get("/listar", (req, res)=>{
  Fornecedor.findAll().then((fornecedor)=>{
    return res.status(201).json(fornecedor)
  }).catch((err) => {
    res.status(500).json({ error: "Erro ao buscar fornecedores" })
  });
})

// Registrar
router.post("/registrar", (req, res)=>{
  Fornecedor.create({
    cnpj: req.body.cnpj,
    razao_social: req.body.razao_social,
    fantasia: req.body.fantasia,
    endereco: req.body.endereco,
    email: req.body.email,
    telefone: req.body.telefone
  }).then(()=>{
    res.status(201).json({ message: "Fornecedor registrado com sucesso" })
  }).catch(()=>{
    res.status(500).json({ error: "Erro ao registrar o fornecedor, verifique se os campos foram preenchidos corretamente" })
  })
})


module.exports = router