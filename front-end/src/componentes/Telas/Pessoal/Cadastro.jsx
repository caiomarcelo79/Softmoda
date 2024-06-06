import { useState } from "react"

function Cadastro(){

  const funcionario = {
    id: "",
    nome: "",
    cpf: "",
    cargo: "",
    salario: 0,
    telefone: ""
  }
  

  const [objFuncionario, setObjFuncionario] = useState(funcionario)

  function Digito(event){
    setObjFuncionario({...objFuncionario, [event.target.name]:event.target.value})
  }

  function Cadastrar(){
    fetch("http://localhost:8080/funcionario/cadastrar", {
      method: 'post',
      body: JSON.stringify(objFuncionario),
      headers: {
        'Content-type':'application/json',
        'Accept':'application/json'
      }
    })
    alert('O funcionario foi cadastrado com sucesso')
    location.reload()
  }

  return(
    <div>
      <br/>
      <form>
        <h2>Cadastre um Funcionario</h2>
        <br/>
        <input onChange={Digito} type="text" name="nome" placeholder="Nome" className="form-control"/>
        <br/>
        <input onChange={Digito} type="text" name="cpf" placeholder="CPF" className="form-control"/>
        <br/>
        <input onChange={Digito} type="text" name="cargo" placeholder="Cargo" className="form-control"/>
        <br/>
        <input onChange={Digito} type="number" name="salario" placeholder="Salário" className="form-control" step="0.010"/>
        <br/>
        <input onChange={Digito} type="text" name="telefone" placeholder="Telefone" className="form-control"/>
        <br/><br/>

        <button className="btn btn-primary" onClick={Cadastrar}>Cadastrar</button>
        <br/><br/>
      </form>
      <br/>
      
    </div>
  )
}

export default Cadastro