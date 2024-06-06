import { useEffect, useState } from "react"
import Cadastro from "./Cadastro"

function Pessoal(){

  const [funcionarios, setFuncionarios] = useState([])
  

  useEffect(()=>{
    fetch("http://localhost:8080/funcionario/listar")
    .then(retorno => retorno.json())
    .then(retorno_convertido => setFuncionarios(retorno_convertido))
  }, [])
  

  const [search, setSearch] = useState("")

  function pesquisa(event){
    setSearch(event.target.value)
  }

  const funcionariosSCH = funcionarios.filter(obj => obj.nome.toLowerCase().includes(search.toLowerCase()))

  

  console.log(funcionariosSCH)

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
      />
      <br/>
      <table className="table">
        <thead>
          <tr>
            <th>Id_Funcionario</th>
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
            funcionariosSCH.map((obj)=>(
              <tr key={obj.nome}>
                <th>{obj.id}</th>
                <th>{obj.nome}</th>
                <th>{obj.cpf}</th>
                <th>{obj.cargo}</th>
                <th>{obj.salario}</th>
                <th>{obj.telefone}</th>
                <th><button onClick={()=>{
                  fetch('http://localhost:8080/funcionario/remover/'+obj.id, {
                  method:'delete',
                  headers:{
                    'Content-type':'application/json',
                    'Accept':'application/json'
                  }})

                  alert('O funcionario foi removido com sucesso')
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

export default Pessoal