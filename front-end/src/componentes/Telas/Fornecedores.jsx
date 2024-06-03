function Fornecedores(){

  return(
    <div>
      <h1>Fornecedores</h1>
      <br/><br/>
      <form>
        <h2>Cadastre um fornecedor</h2>
        <br/>
        <input type="text" placeholder="CNPJ" className="form-control"/>
        <br/>
        <input type="text" placeholder="Razão social" className="form-control"/>
        <br/>
        <input type="text" placeholder="Fantasia" className="form-control"/>
        <br/>
        <input type="text" placeholder="Endereço" className="form-control"/>
        <br/>
  
        <input type="button" value='Cadastre' className="btn btn-primary"/>
      </form>
      <br/>
      <table className="table">
        <thead>
          <tr>
            <th>Id_Fornecedor</th>
            <th>CNPJ</th>
            <th>Razão social</th>
            <th>Fantasia</th>
            <th>Endereço</th>
            <th></th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          
          <tr key="CNPJ">
            <th>524738</th>
            <th>25452167000114</th>
            <th>blablabla CORP LTD</th>
            <th>blablabla</th>
            <th>Rua xxxxxxxxx, 000</th>
            <th><button className="btn btn-warning">Alterar</button></th>
            <th><button className="btn btn-danger">Excluir</button></th>
          </tr>

        </tbody>
      </table>
    </div>
  )
}

export default Fornecedores