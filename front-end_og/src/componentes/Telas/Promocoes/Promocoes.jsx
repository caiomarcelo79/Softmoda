import { useEffect, useState } from "react"
import Cadastro from "./Cadastro"
import axios from "axios"

function Promocoes(){

  const [promocao, setPromocao] = useState([])


  useEffect(()=>{
    axios.get("http://localhost:8080/promocao/listar")
    .then((response)=>{
      setPromocao(response.data)
    })
  }, [promocao])
  

  const [search, setSearch] = useState("")

  function pesquisa(event){
    setSearch(event.target.value)
  }

  const promocaoSCH = promocao.filter(obj => obj.nome.toLowerCase().includes(search.toLowerCase()))

  const formatarData = (data) => {
    const partes = data.slice(0, 10).split("-");
    return `${partes[2]}/${partes[1]}/${partes[0]}`
  }


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
      placeholder="Nome da promoção"
      />
      <br/>
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Promoção</th>
            <th>Desconto</th>
            <th>Validade</th>
            <th>Condições de uso</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {
            promocaoSCH.map((obj, index)=>(
              <tr key={index}>
                <th>#{index + 1}</th>
                <th>{obj.nome}</th>
                <th>{obj.desconto}%</th>
                <th>{formatarData(obj.validade)}</th>
                <th>{obj.condicoes}</th>
                <th><button onClick={()=>{
                  axios.delete("http://localhost:8080/promocao/deletar/"+obj.id)

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