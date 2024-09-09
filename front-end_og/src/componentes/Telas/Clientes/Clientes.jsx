import { useEffect, useState } from "react"
import Cadastro from "./Cadastro"
import axios from "axios"

function Clientes(){

  const [clientes, setClientes] = useState([])


  useEffect(()=>{
    axios.get("http://localhost:8080/cliente/listar")
    .then((response)=>{
      setClientes(response.data)
    })
  }, [clientes])
  

  const [search, setSearch] = useState("")

  function pesquisa(event){
    setSearch(event.target.value)
  }

  const clientesSCH = clientes.filter(obj => obj.nome.toLowerCase().includes(search.toLowerCase()))

  const formatarData = (data) => {
    const partes = data.slice(0, 10).split("-");
    return `${partes[2]}/${partes[1]}/${partes[0]}`
  }
  

  return(
    <div>
      <h1>Clientes cadastrados</h1>
      <Cadastro/>
      <br/><br/>

      <h3>Barra de pesquisa</h3>
      <input className="form-control"
      type="search"
      value={search}
      onChange={pesquisa}
      placeholder="Nome do cliente"
      />
      <br/>
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Nome</th>
            <th>Email</th>
            <th>CPF</th>
            <th>Data de Nascimento</th>
            <th>Telefone</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {
            clientesSCH.map((obj, index)=>(
              <tr key={index}>
                <th>#{index + 1}</th>
                <th>{obj.nome}</th>
                <th>{obj.email}</th>
                <th>{obj.cpf}</th>
                <th>{formatarData(obj.data_nascimento)}</th>
                <th>{obj.telefone}</th>
                <th><button onClick={()=>{
                  axios.delete("http://localhost:8080/cliente/deletar/"+obj.id)
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

export default Clientes