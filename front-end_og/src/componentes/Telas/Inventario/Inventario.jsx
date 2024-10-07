import { useEffect, useState } from "react"
import Cadastro from "./Cadastro"
import axios from "axios"
import baseUrl from "../../../Globais"

function Inventario(){

  const [produtos, setProdutos] = useState([])


  useEffect(()=>{
    axios.get(`${baseUrl}/produto/listar`)
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
      placeholder="Nome do produto"
      />
      <br/>
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Produto</th>
            <th>Quantidade</th>
            <th>Valor</th>
            <th></th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {
            produtosSCH.map((obj, index)=>(
              <tr key={index}>
                <th>#{index + 1}</th>
                <th>{obj.nome}</th>
                <th>{obj.quantidade}</th>
                <th>{obj.valor}</th>
                <th><button onClick={()=>{
                  axios.delete(`${baseUrl}/produto/deletar/${obj.id}`)

                }} className="btn btn-danger">Excluir</button></th>
                <th><button onClick={()=>{
                  axios.get(`${baseUrl}/produto/incrementar/${obj.id}`)

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