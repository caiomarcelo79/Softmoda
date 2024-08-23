import axios from "axios"
import { useState } from "react"

function Cadastro(){


  const [objVenda, setObjVenda] = useState([])

  function Digito(e){
    setObjVenda({...objVenda, [e.target.name]:e.target.value})
  }

  function Submit(e){
    e.preventDefault()
    axios.post("http://localhost:8080/venda/registrar", objVenda)
  }

  return(
    <div>
      <br/>
      <form onSubmit={Submit}>
        <h2>Cadastre a Venda</h2>
        <br/>
        <input onChange={Digito} name="nome_produto" type="text" placeholder="Nome do produto" className="form-control" required/>
        <br/>
        <input onChange={Digito} name="cpf_cliente" type="text" placeholder="CPF do cliente" className="form-control" required/>
        <br/>
        <input onChange={Digito} name="cpf_funcionario" type="text" placeholder="CPF do funcionario" className="form-control" required/>
        <br/>
        <input onChange={Digito} name="nome_promocao" type="text" placeholder="Nome da promocao" className="form-control" required/>
        <br/>
        <input onChange={Digito} name="forma_pagamento" type="text" placeholder="Forma de pagamento" className="form-control" required/>
        <br/><br/>
        <button className="btn btn-primary" type="submit">Cadastrar</button>
        <br/><br/>
      </form>
      <br/>
      
    </div>
  )
}

export default Cadastro