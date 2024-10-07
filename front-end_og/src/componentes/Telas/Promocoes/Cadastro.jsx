import axios from "axios"
import { useState } from "react"
import baseUrl from "../../../Globais"

function Cadastro(){


  const [objPromocao, setObjPromocao] = useState([])

  function Digito(e){
    setObjPromocao({...objPromocao, [e.target.name]:e.target.value})
  }

  function Submit(e){
    e.preventDefault()
    axios.post(`${baseUrl}/promocao/registrar`, objPromocao)
  }

  return(
    <div>
      <br/>
      <form onSubmit={Submit}>
        <h2>Cadastre a Promoção</h2>
        <br/>
        <input onChange={Digito} name="nome" type="text" placeholder="Nome da promoção" className="form-control" required/>
        <br/>
        <input onChange={Digito} name="desconto" min={0} max={100} type="number" placeholder="Porcentagem do desconto" className="form-control" required/>
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