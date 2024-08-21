const express = require("express")
const Cliente = require("../models/Cliente")
const router = express.Router()





// Listar
router.get("/listar", (req, res)=>{
  Cliente.findAll().then((cliente)=>{
    return res.status(201).json(cliente)
  }).catch((err) => {
    res.status(500).json({ error: "Erro ao buscar clientes" })
  });
})

// Registrar
router.post("/registrar", (req, res)=>{
  Cliente.create({
    nome: req.body.nome,
    email: req.body.email,
    cpf: req.body.cpf,
    data_nascimento: req.body.data_nascimento,
    telefone: req.body.telefone
  }).then(()=>{
    res.status(201).json({ message: "Cliente registrado com sucesso" })
  }).catch(()=>{
    res.status(500).json({ error: "Erro ao registrar o cliente, verifique se os campos foram preenchidos corretamente" })
  })
})

// Deletar
router.delete("/deletar/:id", (req, res)=>{
  Cliente.destroy ({ where: {'id': req.params.id} }).then(()=>{
    res.status(200).json({ message: "Cliente deletado com sucesso" })
  }).catch((err)=>{
    res.status(500).json({ error: "Erro ao deletar o cliente" })
  })
})



module.exports = router