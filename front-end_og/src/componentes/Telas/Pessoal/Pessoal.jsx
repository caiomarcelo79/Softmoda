import { useEffect, useState } from "react"
import Cadastro from "./Cadastro"
import axios from "axios"

function Pessoal(){

  const [funcionarios, setFuncionarios] = useState([])
  

  useEffect(()=>{
    axios.get("http://localhost:8080/funcionario/listar")
    .then((response)=>{
      setFuncionarios(response.data)
    })
  }, [funcionarios])
  

  const [search, setSearch] = useState("")

  function pesquisa(event){
    setSearch(event.target.value)
  }

  const funcionariosSCH = funcionarios.filter(obj => obj.nome.toLowerCase().includes(search.toLowerCase()))

  


  return(
    <div>
      <h1>Gestão de pessoal</h1>
      <Cadastro/>
      <br/><br/>
      
      <h3>Barra de pesquisa</h3>
      <input className="form-control"
      type="search"
      value={search}
      onChange={pesquisa}
      placeholder="Nome do funcionário"
      />
      <br/>
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Nome</th>
            <th>CPF</th>
            <th>Cargo</th>
            <th>Salario</th>
            <th>Telefone</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {
            funcionariosSCH.map((obj, index)=>(
              <tr key={index}>
                <th>#{index + 1}</th>
                <th>{obj.nome}</th>
                <th>{obj.cpf}</th>
                <th>{obj.cargo}</th>
                <th>{obj.salario}</th>
                <th>{obj.telefone}</th>
                <th><button onClick={()=>{
                  axios.delete("http://localhost:8080/funcionario/deletar/"+obj.id)

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

export default Pessoal