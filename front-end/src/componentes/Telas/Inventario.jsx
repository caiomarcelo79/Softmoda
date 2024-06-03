import { useEffect, useState } from "react"

function Inventario(){

  const produto = {
    id: 0,
    nome: "",
    cor: "",
    tamanho: "",
    valor: 0.00,
    quatidade: 0
  }


  const [objProduto, setObjProduto] = useState(produto)
  const [produtos, setProdutos] = useState([])


  useEffect(()=>{
    fetch("http://localhost:8080/produto/listar")
    .then(retorno => retorno.json())
    .then(retorno_convertido => setProdutos(retorno_convertido))
  }, [])

  function Cadastrar(){

  }
  

  const [search, setSearch] = useState("")

  const pesquisa = function(event){
    setSearch(event.target.value)
  }


  const produtosSCH = produtos.filter(obj => obj.nome.toLowerCase().includes(search.toLowerCase()))

  console.log(search)

  return(
    <div>
      <h1>Inventário/Estoque</h1>
      <br/><br/>
      <form>
        <h2>Cadastre um produto</h2>
        <br/>
        <input type="text" placeholder="Produto" className="form-control"/>
        <br/>
        <input type="text" placeholder="Quantidade" className="form-control"/>
        <br/>
        <input type="text" placeholder="Cor" className="form-control"/>
        <br/>
        <input type="text" placeholder="Valor" className="form-control"/>
        <br/>
        <input type="text" placeholder="Tamanho" className="form-control"/>
        <br/>
        <input type="button" value='Cadastrar' className="btn btn-primary"/>
      </form>
      <br/>
      
      <input
      type="search"
      value={search}
      onChange={pesquisa}
      />

      <table className="table">
        <thead>
          <tr>
            <th>Id_Produto</th>
            <th>Produto</th>
            <th>Quantidade</th>
            <th>Cor</th>
            <th>Valor</th>
            <th>Tamanho</th>
            <th></th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {
            produtosSCH.map((obj)=>(
              <tr key={obj.nome}>
                <th>{obj.id}</th>
                <th>{obj.nome}</th>
                <th>{obj.quantidade}</th>
                <th>{obj.cor}</th>
                <th>{obj.valor}</th>
                <th>{obj.tamanho}</th>
                <th><button className="btn btn-warning">Alterar</button></th>
                <th><button className="btn btn-danger">Excluir</button></th>
              </tr>
            ))
          }

        </tbody>
      </table>
    </div>
  )
}

export default Inventario