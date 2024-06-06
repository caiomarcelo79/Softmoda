import { useState } from "react"

function Cadastro(){

  const venda = {
    id: "",
    nome_produto: "",
    cpf_cliente: "",
    cpf_funcionario: "",
    nome_cupom: "",
    forma_pagamento: "",
    valor_compra: 0,
    data_compra: ""
  }


  const [objVenda, setObjVenda] = useState(venda)

  function Digito(event){
    setObjVenda({...objVenda, [event.target.name]:event.target.value})
  }

  function Cadastrar(){
    fetch("http://localhost:8080/venda/cadastrar", {
      method: 'post',
      body: JSON.stringify(objVenda),
      headers: {
        'Content-type':'application/json',
        'Accept':'application/json'
      }
    })
    alert('A venda foi cadastrada com sucesso')
    location.reload()
  }

  return(
    <div>
      <p>{JSON.stringify(objVenda)}</p>
      <br/>
      <form>
        <h2>Cadastre a Venda</h2>
        <br/>
        <input onChange={Digito} name="nome_produto" type="text" placeholder="Nome do produto" className="form-control"/>
        <br/>
        <input onChange={Digito} name="cpf_cliente" type="text" placeholder="CPF do cliente" className="form-control"/>
        <br/>
        <input onChange={Digito} name="cpf_funcionario" type="text" placeholder="CPF do funcionario" className="form-control"/>
        <br/>
        <input onChange={Digito} name="nome_cupom" type="text" placeholder="Nome do cupom" className="form-control"/>
        <br/>
        <input onChange={Digito} name="forma_pagamento" type="text" placeholder="Forma de pagamento" className="form-control"/>
        <br/>
        <input onChange={Digito} type="number" name="valor_compra" placeholder="Valor de compra" className="form-control" step="0.010"/>
        <br/>
        <input onChange={Digito} name="data_compra" type="date" placeholder="Data da compra" className="form-control"/>
        <br/><br/>

        <button className="btn btn-primary" onClick={Cadastrar}>Cadastrar</button>
        <br/><br/>
      </form>
      <br/>
      
    </div>
  )
}

export default Cadastro