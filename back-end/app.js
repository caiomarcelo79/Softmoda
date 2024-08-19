const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const ClienteRouter = require('./routes/ClienteRouter')
const FornecedorRouter = require('./routes/FornecedorRouter')
const FuncionarioRouter = require('./routes/FuncionarioRouter')
const ProdutoRouter = require('./routes/ProdutoRouter')
const PromocaoRouter = require('./routes/PromocaoRouter')
const VendaRouter = require('./routes/VendaRouter')

// Config
  // Body Parser
  app.use(bodyParser.urlencoded({extended: false}))
  app.use(bodyParser.json())


  
// Rotas

  app.use("/cliente", ClienteRouter)
  app.use("/fornecedor", FornecedorRouter)
  app.use("/funcionario", FuncionarioRouter)
  app.use("/produto", ProdutoRouter)
  app.use("/promocao", PromocaoRouter)
  app.use("/venda", VendaRouter)

  app.use("/bem-vindo", (req, res)=>{
    res.send("Olá caio, seja bem vindo, sua aplicação está rodando")
  })


app.listen(8080, ()=>{
  console.log("Servidor rodando na porta 8080")
})