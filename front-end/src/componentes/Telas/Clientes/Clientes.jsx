import { useEffect, useState } from "react"
import Cadastro from "./Cadastro"

function Clientes(){

  const [clientes, setClientes] = useState([])


  useEffect(()=>{
    fetch("http://localhost:8080/cliente/listar")
    .then(retorno => retorno.json())
    .then(retorno_convertido => setClientes(retorno_convertido))
  }, [])
  

  const [search, setSearch] = useState("")

  function pesquisa(event){
    setSearch(event.target.value)
  }

  const clientesSCH = clientes.filter(obj => obj.nome.toLowerCase().includes(search.toLowerCase()))

  

  console.log(clientesSCH)

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
      />
      <br/>
      <table className="table">
        <thead>
          <tr>
            <th>Id_Cliente</th>
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
            clientesSCH.map((obj)=>(
              <tr key={obj.nome}>
                <th>{obj.id}</th>
                <th>{obj.nome}</th>
                <th>{obj.email}</th>
                <th>{obj.cpf}</th>
                <th>{obj.data_nascimento}</th>
                <th>{obj.telefone}</th>
                <th><button onClick={()=>{
                  fetch('http://localhost:8080/cliente/remover/'+obj.id, {
                  method:'delete',
                  headers:{
                    'Content-type':'application/json',
                    'Accept':'application/json'
                  }})

                  alert('O cliente foi removido com sucesso')
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

export default Clientes