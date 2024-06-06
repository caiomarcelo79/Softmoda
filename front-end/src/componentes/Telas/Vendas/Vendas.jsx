import { useEffect, useState } from "react"
import Cadastro from "./Cadastro"

function Vendas(){

  const [venda, setVenda] = useState([])


  useEffect(()=>{
    fetch("http://localhost:8080/venda/listar")
    .then(retorno => retorno.json())
    .then(retorno_convertido => setVenda(retorno_convertido))
  }, [])
  

  const [search, setSearch] = useState("")

  function pesquisa(event){
    setSearch(event.target.value)
  }

  const vendaSCH = venda.filter(obj => obj.data_compra.toLowerCase().includes(search.toLowerCase()))

  

  console.log(vendaSCH)

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
            <th>Id_Vendas</th>
            <th>Id_Produto</th>
            <th>Id_Cliente</th>
            <th>Id_Funcionario</th>
            <th>Id_Cupom</th>
            <th>Forma de pagamento</th>
            <th>Valor de Compra</th>
            <th>Data da compra</th>
            <th></th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {
            vendaSCH.map((obj)=>(
              <tr key={obj.data_compra}>
                <th>{obj.id}</th>
                <th>{obj.id_produto}</th>
                <th>{obj.id_cliente}</th>
                <th>{obj.id_funcionario}</th>
                <th>{obj.id_cupom}</th>
                <th>{obj.forma_pagamento}</th>
                <th>{obj.valor_compra}</th>
                <th>{obj.data_compra}</th>
                <th><button onClick={()=>{alert('Desenvolvido no Futuro')}} className="btn btn-warning">Alterar</button></th>
                <th><button onClick={()=>{
                  fetch('http://localhost:8080/venda/remover/'+obj.id, {
                  method:'delete',
                  headers:{
                    'Content-type':'application/json',
                    'Accept':'application/json'
                  }})

                  alert('A venda foi removida com sucesso')
                  location.reload()
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