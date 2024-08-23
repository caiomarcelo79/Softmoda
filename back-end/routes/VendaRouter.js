const express = require("express")
const Venda = require("../models/Venda")
const router = express.Router()
const Produto = require("../models/Produto")
const Promocao = require("../models/Promocao")
const { where, Op } = require("sequelize")





// Listar
router.get("/listar", (req, res)=>{
  Venda.findAll().then((venda)=>{
    return res.status(201).json(venda)
  }).catch((err) => {
    res.status(500).json({ error: "Erro ao buscar vendas" })
  });
})

// Registrar
router.post("/registrar", async (req, res)=>{

  try {
    const nome_produto = req.body.nome_produto
    const nome_promocao = req.body.nome_promocao

    const produto = await Produto.findOne({
      attributes: ['valor', 'quantidade'],
      where: {
        nome: {
          [Op.eq]: nome_produto
        }
      }
    })

    if (produto.quantidade < 1) {
      res.status(500).json({ error: "Erro ao registrar a venda, falta no estoque"})
    }else{

      const promocao = await Promocao.findOne({
        attributes: ['desconto'],
        where: {
          nome: {
            [Op.eq]: nome_promocao
          }
        }
      })


      const retirada = await Produto.update({
        quantidade: produto.quantidade - 1
        }, {
          where: {'nome': nome_produto}
        }
      ).then(()=>{
        console.log("produto retirado com sucesso")
      }).catch((err)=>{
        console.log("Erro ao retirar o produto")
      })

      const desconto = (produto.valor * promocao.desconto)/100
      const descontoFinal = produto.valor - desconto
  
      const venda = await Venda.create({
        nome_produto: nome_produto,
        cpf_cliente: req.body.cpf_cliente,
        cpf_funcionario: req.body.cpf_funcionario,
        nome_promocao: nome_promocao,
        forma_pagamento: req.body.forma_pagamento,
        valor_compra: descontoFinal,
        data_compra: Date.now()
        
      })

      res.status(201).json({ message: "Venda registrada com sucesso", venda })
    }

  } catch (error) {
    res.status(500).json({ error: "Erro ao registrar a venda. Verifique se esta tudo correto"})
  }
  
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