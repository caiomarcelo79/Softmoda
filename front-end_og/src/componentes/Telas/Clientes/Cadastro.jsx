import axios from "axios"
import { useState } from "react"

function Cadastro(){



  const [objCliente, setObjCliente] = useState([])

  function Digito(e){
    setObjCliente({...objCliente, [e.target.name]:e.target.value})
  }

  function Submit(e){
    e.preventDefault()
    axios.post("http://localhost:8080/cliente/registrar", objCliente)
  }

  return(
    <div>
      <br/>
      <form onSubmit={Submit}>
        <h2>Cadastre o Cliente</h2>
        <br/>
        <input onChange={Digito} name="nome" type="text" placeholder="Nome Cliente" className="form-control" required/>
        <br/>
        <input onChange={Digito} name="email" type="email" placeholder="Email" className="form-control" required/>
        <br/>
        <input onChange={Digito} name="cpf" type="text" placeholder="CPF" className="form-control" required/>
        <br/>
        <input onChange={Digito} name="data_nascimento" type="date" placeholder="Data Nascimento" className="form-control" required/>
        <br/>
        <input onChange={Digito} name="telefone" type="text" placeholder="Telefone para Contato" className="form-control" required/>
        <br/><br/>

        <button className="btn btn-primary" type="submit">Cadastrar</button>
        <br/><br/>
      </form>
      <br/>
      
    </div>
  )
}

export default Cadastro