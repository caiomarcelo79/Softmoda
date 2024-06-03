function Inventario(){

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
      <table className="table">
        <thead>
          <tr>
            <th>Id_Produto</th>
            <th>Produto</th>
            <th>Quantidade</th>
            <th>Cor</th>
            <th>Valor</th>
            <th>N°_Vendas</th>
            <th>Tamanho</th>
            <th></th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          
          <tr key="Produto">
            <th>468236</th>
            <th>Calça</th>
            <th>7</th>
            <th>Jeans</th>
            <th>99,99</th>
            <th>13</th>
            <th>42</th>
            <th><button className="btn btn-warning">Alterar</button></th>
            <th><button className="btn btn-danger">Excluir</button></th>
          </tr>

          <tr key="Produto">
            <th>563535</th>
            <th>Camisa</th>
            <th>4</th>
            <th>Vermelho</th>
            <th>79,99</th>
            <th>17</th>
            <th>M</th>
            <th><button className="btn btn-warning">Alterar</button></th>
            <th><button className="btn btn-danger">Excluir</button></th>
          </tr>

        </tbody>
      </table>
    </div>
  )
}

export default Inventario