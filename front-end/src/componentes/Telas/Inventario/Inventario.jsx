import { useEffect, useState } from "react"
import Cadastro from "./Cadastro"
import axios from "axios"

function Inventario(){

  const [produtos, setProdutos] = useState([])


  useEffect(()=>{
    axios.get("http://localhost:8080/produto/listar")
    .then((response)=>{
      setProdutos(response.data)
    })
  }, [produtos])

  const [search, setSearch] = useState("")

  function pesquisa(event){
    setSearch(event.target.value)
  }

  const produtosSCH = produtos.filter(obj => obj.nome.toLowerCase().includes(search.toLowerCase()))



  return(
    <div>
      <h1>Inventário/Estoque</h1>
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
            <th>Produto</th>
            <th>Quantidade</th>
            <th>Valor</th>
            <th></th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {
            produtosSCH.map((obj)=>(
              <tr key={obj.nome}>
                <th>{obj.nome}</th>
                <th>{obj.quantidade}</th>
                <th>{obj.valor}</th>
                <th><button onClick={()=>{
                  axios.delete("http://localhost:8080/produto/deletar/"+obj.id)

                }} className="btn btn-danger">Excluir</button></th>
                <th><button onClick={()=>{
                  axios.get("http://localhost:8080/produto/incrementar/"+obj.id)

                }} className="btn btn-success">Incrementar</button></th>
              </tr>
            ))
          }

        </tbody>
      </table>
    </div>
  )
}

export default Inventario