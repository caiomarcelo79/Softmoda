import { useState } from "react"

function Cadastro(){

  const cliente = {
    id: "",
    nome: "",
    email: "",
    cpf: "",
    data_nascimento: "",
    telefone: ""
  }


  const [objCliente, setObjCliente] = useState(cliente)

  function Digito(event){
    setObjCliente({...objCliente, [event.target.name]:event.target.value})
  }

  function Cadastrar(){
    fetch("http://localhost:8080/cliente/cadastrar", {
      method: 'post',
      body: JSON.stringify(objCliente),
      headers: {
        'Content-type':'application/json',
        'Accept':'application/json'
      }
    })
    alert('O cliente foi cadastrado com sucesso')
    location.reload()
  }

  return(
    <div>
      <br/>
      <form>
        <h2>Cadastre o Cliente</h2>
        <br/>
        <input onChange={Digito} name="nome" type="text" placeholder="Nome Cliente" className="form-control"/>
        <br/>
        <input onChange={Digito} name="email" type="email" placeholder="Email" className="form-control"/>
        <br/>
        <input onChange={Digito} name="cpf" type="text" placeholder="CPF" className="form-control"/>
        <br/>
        <input onChange={Digito} name="data_nascimento" type="date" placeholder="Data Nascimento" className="form-control"/>
        <br/>
        <input onChange={Digito} name="telefone" type="text" placeholder="Telefone para Contato" className="form-control"/>
        <br/><br/>

        <button className="btn btn-primary" onClick={Cadastrar}>Cadastrar</button>
        <br/><br/>
      </form>
      <br/>
      
    </div>
  )
}

export default Cadastro