import axios from "axios"
import { useState } from "react"

function Cadastro(){


  const [objFornecedor, setObjFornecedor] = useState([])

  function Digito(e){
    setObjFornecedor({...objFornecedor, [e.target.name]:e.target.value})
  }

  function Submit(e){
    e.preventDefault()
    axios.post("http://localhost:8080/fornecedor/registrar", objFornecedor)
  }

  return(
    <div>
      <br/>
      <form onSubmit={Submit}>
        <h2>Cadastre o Fornecedor</h2>
        <br/>
        <input onChange={Digito} name="cnpj" type="text" placeholder="CNPJ" className="form-control" required/>
        <br/>
        <input onChange={Digito} name="razao_social" type="text" placeholder="Razão social" className="form-control" required/>
        <br/>
        <input onChange={Digito} name="fantasia" type="text" placeholder="Fantasia" className="form-control" required/>
        <br/>
        <input onChange={Digito} name="endereco" type="text" placeholder="Endereço" className="form-control" required/>
        <br/>
        <input onChange={Digito} name="email" type="text" placeholder="Email" className="form-control" required/>
        <br/>
        <input onChange={Digito} name="telefone" type="text" placeholder="Telefone" className="form-control" required/>
        <br/><br/>

        <button className="btn btn-primary" type="submit">Cadastrar</button>
        <br/><br/>
      </form>
      <br/>
      
    </div>
  )
}

export default Cadastro