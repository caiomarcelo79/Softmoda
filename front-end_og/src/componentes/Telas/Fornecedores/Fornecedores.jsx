import { useEffect, useState } from "react"
import Cadastro from "./Cadastro"
import axios from "axios"
import baseUrl from "../../../Globais"

function Fornecedores(){

  const [fornecedor, setFornecedor] = useState([])


  useEffect(()=>{
    axios.get(`${baseUrl}/fornecedor/listar`)
    .then((response)=>{
      setFornecedor(response.data)
    })
  }, [fornecedor])
  
  const [search, setSearch] = useState("")

  function pesquisa(event){
    setSearch(event.target.value)
  }

  const fornecedorSCH = fornecedor.filter(obj => obj.fantasia.toLowerCase().includes(search.toLowerCase()))

  


  return(
    <div>
      <h1>Fornecedores</h1>
      <Cadastro/>
      <br/><br/>
      
      <h3>Barra de pesquisa</h3>
      <input className="form-control"
      type="search"
      value={search}
      onChange={pesquisa}
      placeholder="Nome fantasia"
      />
      <br/>
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>CNPJ</th>
            <th>Razão social</th>
            <th>Fantasia</th>
            <th>Endereço</th>
            <th>Email</th>
            <th>Telefone</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {
            fornecedorSCH.map((obj, index)=>(
              <tr key={index}>
                <th>#{index + 1}</th>
                <th>{obj.cnpj}</th>
                <th>{obj.razao_social}</th>
                <th>{obj.fantasia}</th>
                <th>{obj.endereco}</th>
                <th>{obj.email}</th>
                <th>{obj.telefone}</th>
                <th><button onClick={()=>{
                  axios.delete(`${baseUrl}/fornecedor/deletar/${obj.id}`)

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

export default Fornecedores