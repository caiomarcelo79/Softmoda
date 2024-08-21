const express = require("express")
const Venda = require("../models/Venda")
const router = express.Router()





// Listar
router.get("/listar", (req, res)=>{
  Venda.findAll().then((venda)=>{
    return res.status(201).json(venda)
  }).catch((err) => {
    res.status(500).json({ error: "Erro ao buscar vendas" })
  });
})

// Registrar
router.post("/registrar", (req, res)=>{
  Venda.create({
    nome_produto: req.body.nome_produto,
    cpf_cliente: req.body.cpf_cliente,
    cpf_funcionario: req.body.cpf_funcionario,
    nome_promocao: req.body.nome_promocao,
    forma_pagamento: req.body.forma_pagamento,
    data_compra: Date.now()
  }).then(()=>{
    res.status(201).json({ message: "Venda registrada com sucesso" })
  }).catch(()=>{
    res.status(500).json({ error: "Erro ao registrar a venda, verifique se os campos foram preenchidos corretamente" })
  })
})

// Deletar
router.delete("/deletar/:id", (req, res)=>{
  Venda.destroy ({ where: {'id': req.params.id} }).then(()=>{
    res.status(200).json({ message: "Venda deletada com sucesso" })
  }).catch((err)=>{
    res.status(500).json({ error: "Erro ao deletar a venda" })
  })
})



module.exports = router