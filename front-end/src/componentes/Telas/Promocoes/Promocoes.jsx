import { useEffect, useState } from "react"
import Cadastro from "./Cadastro"

function Promocoes(){

  const [promo, setPromo] = useState([])


  useEffect(()=>{
    fetch("http://localhost:8080/promo/listar")
    .then(retorno => retorno.json())
    .then(retorno_convertido => setPromo(retorno_convertido))
  }, [])
  

  const [search, setSearch] = useState("")

  function pesquisa(event){
    setSearch(event.target.value)
  }

  const promoSCH = promo.filter(obj => obj.nome.toLowerCase().includes(search.toLowerCase()))

  

  console.log(promoSCH)

  return(
    <div>
      <h1>Promoções</h1>
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
            <th>Id_Promocao</th>
            <th>Promoção</th>
            <th>Desconto</th>
            <th>Validade</th>
            <th>Condições de uso</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {
            promoSCH.map((obj)=>(
              <tr key={obj.nome}>
                <th>{obj.id}</th>
                <th>{obj.nome}</th>
                <th>{obj.desconto}</th>
                <th>{obj.validade}</th>
                <th>{obj.condicoes}</th>
                <th><button onClick={()=>{
                  fetch('http://localhost:8080/promo/remover/'+obj.id, {
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

export default Promocoes