import { useState } from "react"

function Cadastro(){

  const promo = {
    id: 0,
    nome: "",
    desconto: "",
    condicoes: "",
    validade: ""
  }


  const [objPromo, setObjPromo] = useState(promo)

  function Digito(event){
    setObjPromo({...objPromo, [event.target.name]:event.target.value})
  }

  function Cadastrar(){
    fetch("http://localhost:8080/promo/cadastrar", {
      method: 'post',
      body: JSON.stringify(objPromo),
      headers: {
        'Content-type':'application/json',
        'Accept':'application/json'
      }
    })
    alert('A promoção foi cadastrada com sucesso')
    location.reload()
  }

  return(
    <div>
      <p>{JSON.stringify(objPromo)}</p>
      <br/>
      <form>
        <h2>Cadastre a Promoção</h2>
        <br/>
        <input onChange={Digito} name="nome" type="text" placeholder="Nome da promoção. ex: verao2024" className="form-control"/>
        <br/>
        <input onChange={Digito} name="desconto" min={0} max={100} type="number" placeholder="Desconto" className="form-control"/>
        <br/>
        <input onChange={Digito} name="condicoes" type="text" placeholder="Condições de uso" className="form-control"/>
        <br/>
        <input onChange={Digito} name="validade" type="date" placeholder="validade" className="form-control"/>
        <br/><br/>

        <button className="btn btn-primary" onClick={Cadastrar}>Cadastrar</button>
        <br/><br/>
      </form>
      <br/>
      
    </div>
  )
}

export default Cadastro