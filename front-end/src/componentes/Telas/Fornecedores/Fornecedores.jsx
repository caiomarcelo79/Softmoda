import { useEffect, useState } from "react"
import Cadastro from "./Cadastro"

function Fornecedores(){

  const [fornecedor, setFornecedor] = useState([])


  useEffect(()=>{
    fetch("http://localhost:8080/fornecedor/listar")
    .then(retorno => retorno.json())
    .then(retorno_convertido => setFornecedor(retorno_convertido))
  }, [])
  

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
      />
      <br/>
      <table className="table">
        <thead>
          <tr>
            <th>Id_Fornecedor</th>
            <th>CNPJ</th>
            <th>Razão social</th>
            <th>Fantasia</th>
            <th>Endereço</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {
            fornecedorSCH.map((obj)=>(
              <tr key={obj.fantasia}>
                <th>{obj.id}</th>
                <th>{obj.cnpj}</th>
                <th>{obj.razao_social}</th>
                <th>{obj.fantasia}</th>
                <th>{obj.endereco}</th>
                <th><button onClick={()=>{
                  fetch('http://localhost:8080/fornecedor/remover/'+obj.id, {
                  method:'delete',
                  headers:{
                    'Content-type':'application/json',
                    'Accept':'application/json'
                  }})

                  alert('O fornecedor foi removido com sucesso')
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

export default Fornecedores