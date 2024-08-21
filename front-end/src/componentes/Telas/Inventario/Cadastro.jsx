import axios from "axios"
import { useState } from "react"

function Cadastro(){


  const [objProduto, setObjProduto] = useState([])

  function Digito(e){
    setObjProduto({...objProduto, [e.target.name]: e.target.value})
  }

  function Submit(e){
    e.preventDefault()
    axios.post("http://localhost:8080/produto/registrar", objProduto)

  }

  return(
    <div>
      <br/>
      <form onSubmit={Submit}>
        <h2>Cadastre um produto</h2>
        <br/>
        <input onChange={Digito} type="text" name="nome" placeholder="Nome" className="form-control" required/>
        <br/>
        <input onChange={Digito} type="number" name="valor" placeholder="Valor" className="form-control" step="0.010" required/>
        <br/>
        <input onChange={Digito} type="number" name="quantidade" placeholder="Quantidade" className="form-control" required/>
        <br/><br/>

        <button className="btn btn-primary" type="submit">Cadastrar</button>
        <br/><br/>
      </form>
      <br/>
      
    </div>
  )
}

export default Cadastro