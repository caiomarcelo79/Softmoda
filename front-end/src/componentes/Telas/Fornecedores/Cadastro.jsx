import { useState } from "react"

function Cadastro(){

  const fornecedor = {
    id: "",
    cnpj: "",
    razao_social: "",
    fantasia: "",
    endereco: ""
  }


  const [objFornecedor, setObjFornecedor] = useState(fornecedor)

  function Digito(event){
    setObjFornecedor({...objFornecedor, [event.target.name]:event.target.value})
  }

  function Cadastrar(){
    fetch("http://localhost:8080/fornecedor/cadastrar", {
      method: 'post',
      body: JSON.stringify(objFornecedor),
      headers: {
        'Content-type':'application/json',
        'Accept':'application/json'
      }
    })
    alert('o fornecedor foi cadastrado com sucesso')
    location.reload()
  }

  return(
    <div>
      <p>{JSON.stringify(objFornecedor)}</p>
      <br/>
      <form>
        <h2>Cadastre o Fornecedor</h2>
        <br/>
        <input onChange={Digito} name="cnpj" type="text" placeholder="CNPJ" className="form-control"/>
        <br/>
        <input onChange={Digito} name="razao_social" type="text" placeholder="Razão social" className="form-control"/>
        <br/>
        <input onChange={Digito} name="fantasia" type="text" placeholder="Fantasia" className="form-control"/>
        <br/>
        <input onChange={Digito} name="endereco" type="text" placeholder="Endereço" className="form-control"/>
        <br/><br/>

        <button className="btn btn-primary" onClick={Cadastrar}>Cadastrar</button>
        <br/><br/>
      </form>
      <br/>
      
    </div>
  )
}

export default Cadastro