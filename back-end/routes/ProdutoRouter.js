const express = require("express")
const Produto = require("../models/Produto");
const { where, Op } = require("sequelize");
const router = express.Router()





// Listar
router.get("/listar", (req, res)=>{
  Produto.findAll().then((produto)=>{
    return res.status(201).json(produto)
  }).catch((err) => {
    res.status(500).json({ error: "Erro ao buscar produtos" })
  });
})

// Registrar
router.post("/registrar", (req, res)=>{
  Produto.create({
    nome: req.body.nome,
    valor: req.body.valor,
    quantidade: req.body.quantidade
  }).then(()=>{
    res.status(201).json({ message: "Produto registrado com sucesso" })
  }).catch(()=>{
    res.status(500).json({ error: "Erro ao registrar o produto, verifique se os campos foram preenchidos corretamente" })
  })
})

// Incrementar quantidade
router.get("/incrementar/:id", async (req, res)=>{

  const produto = await Produto.findOne({
    attributes: ['quantidade'],
    where: {
      id: {
        [Op.eq]: req.params.id
      }
    }
  })
  console.log(produto.quantidade)

  await Produto.update({
    quantidade: produto.quantidade + 1
  }, {
    where: {'id': req.params.id}
  }).then(()=>{
    res.status(201).json({ message: "Produto incrementado com sucesso" })
  }).catch(()=>{
    res.status(500).json({ error: "Erro ao incrementar o produto" })
  })
  
})

// Deletar
router.delete("/deletar/:id", (req, res)=>{
  Produto.destroy ({ where: {'id': req.params.id} }).then(()=>{
    res.status(200).json({ message: "Produto deletado com sucesso" })
  }).catch((err)=>{
    res.status(500).json({ error: "Erro ao deletar o produto" })
  })
})


module.exports = router