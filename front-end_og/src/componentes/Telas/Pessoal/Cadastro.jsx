import { useState } from "react"
import axios from "axios"
import baseUrl from "../../../Globais"

function Cadastro(){

  
  const [objFuncionario, setObjFuncionario] = useState([])

  function Digito(e){
    setObjFuncionario({...objFuncionario, [e.target.name]:e.target.value})
  }

  function Submit(e){
    e.preventDefault()
    axios.post(`${baseUrl}/funcionario/registrar`, objFuncionario)
  }

  return(
    <div>
      <br/>
      <form onSubmit={Submit}>
        <h2>Cadastre um Funcionario</h2>
        <br/>
        <input onChange={Digito} type="text" name="nome" placeholder="Nome" className="form-control" required/>
        <br/>
        <input onChange={Digito} type="text" name="cpf" placeholder="CPF" className="form-control" required/>
        <br/>
        <input onChange={Digito} type="text" name="cargo" placeholder="Cargo" className="form-control" required/>
        <br/>
        <input onChange={Digito} type="number" name="salario" placeholder="Salário" className="form-control" step="0.010" required/>
        <br/>
        <input onChange={Digito} type="text" name="telefone" placeholder="Telefone" className="form-control" required/>
        <br/><br/>

        <button className="btn btn-primary" type="submit">Cadastrar</button>
        <br/><br/>
      </form>
      <br/>
      
    </div>
  )
}

export default Cadastro