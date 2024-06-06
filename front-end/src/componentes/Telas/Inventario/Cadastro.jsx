import { useState } from "react"

function Cadastro(){

  const produto = {
    id: "",
    nome: "",
    cor: "",
    tamanho: "",
    valor: 0.00,
    quatidade: 0
  }


  const [objProduto, setObjProduto] = useState(produto)

  function Digito(event){
    setObjProduto({...objProduto, [event.target.name]:event.target.value})
  }

  function Cadastrar(){
    fetch("http://localhost:8080/produto/cadastrar", {
      method: 'post',
      body: JSON.stringify(objProduto),
      headers: {
        'Content-type':'application/json',
        'Accept':'application/json'
      }
    })
    alert('O produto foi cadastrado com sucesso')
    location.reload()
  }

  return(
    <div>
      <br/>
      <form>
        <h2>Cadastre um produto</h2>
        <br/>
        <input onChange={Digito} type="text" name="nome" placeholder="Nome" className="form-control"/>
        <br/>
        <input onChange={Digito} type="text" name="cor" placeholder="Cor" className="form-control"/>
        <br/>
        <input onChange={Digito} type="text" name="tamanho" placeholder="Tamanho" className="form-control"/>
        <br/>
        <input onChange={Digito} type="number" name="valor" placeholder="Valor" className="form-control" step="0.010"/>
        <br/>
        <input onChange={Digito} type="number" name="quantidade" placeholder="Quantidade" className="form-control"/>
        <br/><br/>

        <button className="btn btn-primary" onClick={Cadastrar}>Cadastrar</button>
        <br/><br/>
      </form>
      <br/>
      
    </div>
  )
}

export default Cadastro