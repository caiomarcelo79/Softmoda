import { useEffect, useState } from "react"
import Cadastro from "./Cadastro"

function Inventario(){

  const [produtos, setProdutos] = useState([])


  useEffect(()=>{
    fetch("http://localhost:8080/produto/listar")
    .then(retorno => retorno.json())
    .then(retorno_convertido => setProdutos(retorno_convertido))
  }, [])
  

  const [search, setSearch] = useState("")

  function pesquisa(event){
    setSearch(event.target.value)
  }

  const Remover = ()=>{
    fetch('http://localhost:8080/produto/remover/'+obj.id, {
      method:'delete',
      headers:{
        'Content-type':'application/json',
        'Accept':'application/json'
      }
    })
    console.log(obj.id)
  }


  function Retorno(){
    console.log(obj.id)
  }

  const produtosSCH = produtos.filter(obj => obj.nome.toLowerCase().includes(search.toLowerCase()))

  

  console.log(produtosSCH)



  return(
    <div>
    <Cadastro/>
    <br/><br/>
      
      <h3>Barra de pesquisa</h3>
      <input className="form-control"
      type="search"
      value={search}
      onChange={pesquisa}
      />

      <table className="table">
        <thead>
          <tr>
            <th>Id_Produto</th>
            <th>Produto</th>
            <th>Quantidade</th>
            <th>Cor</th>
            <th>Valor</th>
            <th>Tamanho</th>
            <th></th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {
            produtosSCH.map((obj)=>(
              <tr key={obj.nome}>
                <th>{obj.id}</th>
                <th>{obj.nome}</th>
                <th>{obj.quantidade}</th>
                <th>{obj.cor}</th>
                <th>{obj.valor}</th>
                <th>{obj.tamanho}</th>
                <th><button onClick={()=>{alert('Desenvolvido no Futuro')}} className="btn btn-warning">Alterar</button></th>
                <th><button onClick={()=>{
                  fetch('http://localhost:8080/produto/remover/'+obj.id, {
                  method:'delete',
                  headers:{
                    'Content-type':'application/json',
                    'Accept':'application/json'
                  }})

                  alert('O produto foi removido com sucesso')
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

export default Inventario