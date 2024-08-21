import axios from "axios"
import { useState } from "react"

function Cadastro(){


  const [objPromocao, setObjPromocao] = useState([])

  function Digito(e){
    setObjPromocao({...objPromocao, [e.target.name]:e.target.value})
  }

  function Submit(e){
    e.preventDefault()
    axios.post("http://localhost:8080/promocao/registrar", objPromocao)
  }

  return(
    <div>
      <br/>
      <form onSubmit={Submit}>
        <h2>Cadastre a Promoção</h2>
        <h3>{JSON.stringify(objPromocao)}</h3>
        <br/>
        <input onChange={Digito} name="nome" type="text" placeholder="Nome da promoção. ex: verao2024" className="form-control" required/>
        <br/>
        <input onChange={Digito} name="desconto" min={0} max={100} type="number" placeholder="Porcentagem do desconto. ex: 15%" className="form-control" required/>
        <br/>
        <input onChange={Digito} name="condicoes" type="text" placeholder="Condições de uso" className="form-control" required/>
        <br/>
        <input onChange={Digito} name="validade" type="date" placeholder="validade" className="form-control" required/>
        <br/><br/>

        <button className="btn btn-primary" type="submit">Cadastrar</button>
        <br/><br/>
      </form>
      <br/>
      
    </div>
  )
}

export default Cadastro