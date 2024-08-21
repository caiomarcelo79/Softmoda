const express = require("express")
const Funcionario = require("../models/Funcionario")
const router = express.Router()





// Listar
router.get("/listar", (req, res)=>{
  Funcionario.findAll().then((funcionario)=>{
    return res.status(201).json(funcionario)
  }).catch((err) => {
    res.status(500).json({ error: "Erro ao buscar funcionarios" })
  });
})

// Registrar
router.post("/registrar", (req, res)=>{
  Funcionario.create({
    nome: req.body.nome,
    cpf: req.body.cpf,
    cargo: req.body.cargo,
    salario: req.body.salario,
    telefone: req.body.telefone
  }).then(()=>{
    res.status(201).json({ message: "Funcionario registrado com sucesso" })
  }).catch(()=>{
    res.status(500).json({ error: "Erro ao registrar o funcionario, verifique se os campos foram preenchidos corretamente" })
  })
})

// Deletar
router.delete("/deletar/:id", (req, res)=>{
  Funcionario.destroy ({ where: {'id': req.params.id} }).then(()=>{
    res.status(200).json({ message: "Funcionario deletado com sucesso" })
  }).catch((err)=>{
    res.status(500).json({ error: "Erro ao deletar o funcionario" })
  })
})



module.exports = router