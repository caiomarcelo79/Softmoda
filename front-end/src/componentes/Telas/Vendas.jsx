function Vendas(){

  return(
    <div>
      <h1>Histórico de vendas</h1>
      <br/><br/>
      <table className="table">
        <thead>
          <tr>
            <th>Id_Venda</th>
            <th>Id_Produto</th>
            <th>Nome_Cliente</th>
            <th>Tamanho</th>
            <th>Cupom</th>
            <th>Forma_Pagamento</th>
            <th>Valor_Compra</th>
            <th></th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          
          <tr key="Nome_Cliente">
            <th>978545</th>
            <th>468236</th>
            <th>José Alencar Silva</th>
            <th>42</th>
            <th>verao2024</th>
            <th>Crédito</th>
            <th>84,99</th>
            <th><button className="btn btn-warning">Reembolsar</button></th>
            <th><button className="btn btn-danger">Excluir</button></th>
          </tr>

          <tr key="Nome_Cliente">
            <th>321546</th>
            <th>563535</th>
            <th>Adéle Leitão Cavalcante</th>
            <th>M</th>
            <th>verao2024</th>
            <th>Débito</th>
            <th>67,99</th>
            <th><button className="btn btn-warning">Reembolsar</button></th>
            <th><button className="btn btn-danger">Excluir</button></th>
          </tr>

        </tbody>
      </table>
    </div>
  )
}

export default Vendas