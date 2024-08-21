import { useEffect, useState } from "react"
import Cadastro from "./Cadastro"
import axios from "axios"

function Vendas(){

  const [venda, setVenda] = useState([])


  useEffect(()=>{
    axios.get("http://localhost:8080/venda/listar")
    .then((response)=>{
      setVenda(response.data)
    })
  }, [venda])
  

  const [search, setSearch] = useState("")

  function pesquisa(event){
    setSearch(event.target.value)
  }

  const vendaSCH = venda.filter(obj => obj.data_compra.toLowerCase().includes(search.toLowerCase()))

  


  return(
    <div>
      <h1>Vendas</h1>
      <Cadastro/>
      <br/><br/>
      
      <h3>Barra de pesquisa</h3>
      <input className="form-control"
      type="search"
      value={search}
      onChange={pesquisa}
      />
      <br/>
      <table className="table">
        <thead>
          <tr>
            <th>Nome produto</th>
            <th>CPF cliente</th>
            <th>CPF funcionario</th>
            <th>Nome promocao</th>
            <th>Forma de pagamento</th>
            <th>Valor de Compra</th>
            <th>Data da compra</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {
            vendaSCH.map((obj)=>(
              <tr key={obj.data_compra}>
                <th>{obj.nome_produto}</th>
                <th>{obj.cpf_cliente}</th>
                <th>{obj.cpf_funcionario}</th>
                <th>{obj.nome_promocao || "vazio"}</th>
                <th>{obj.forma_pagamento}</th>
                <th>{obj.valor_compra || "vazio"}</th>
                <th>{obj.data_compra}</th>
                <th><button onClick={()=>{
                  axios.delete("http://localhost:8080/venda/deletar/"+obj.id)

                }} 
                  className="btn btn-danger">Excluir</button></th>
              </tr>
            ))
          }

        </tbody>
      </table>
    </div>
  )
}

export default Vendas