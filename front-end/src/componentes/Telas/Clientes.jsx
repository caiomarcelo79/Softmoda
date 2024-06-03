function Clientes(){

  return(
    <div>
      <h1>Clientes cadastrados</h1>
      <br/><br/>
      <form>
        <h2>Cadastre o Cliente</h2>
        <br/>
        <input type="text" placeholder="Nome Cliente" className="form-control"/>
        <br/>
        <input type="email" placeholder="Email" className="form-control"/>
        <br/>
        <input type="text" placeholder="CPF" className="form-control"/>
        <br/>
        <input type="date" placeholder="Data Nascimento" className="form-control"/>
        <br/>
        <input type="number" placeholder="Telefone para Contato" className="form-control"/>
        <br/>
        
        <input type="button" value='Cadastrar' className="btn btn-primary"/>
      </form>
      <br/>
      <table className="table">
        <thead>
          <tr>
            <th>Id_Cliente</th>
            <th>Nome_Cliente</th>
            <th>Email</th>
            <th>CPF</th>
            <th>Data de Nascimento</th>
            <th>Telefone</th>
            <th></th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          
          <tr key="CPF">
            <th>196374</th>
            <th>José Alencar Silva</th>
            <th>jose.silva@email.com</th>
            <th>75566557333</th>
            <th>06/10/1999</th>
            <th>85981737668</th>
            <th><button className="btn btn-warning">Histórico</button></th>
            <th><button className="btn btn-danger">Excluir</button></th>
          </tr>

          <tr key="CPF">
            <th>563535</th>
            <th>Adéle Leitão Cavalcante</th>
            <th>adele.cavalcante@email.com</th>
            <th>39871951345</th>
            <th>23/04/2003</th>
            <th>85981243439</th>
            <th><button className="btn btn-warning">Histórico</button></th>
            <th><button className="btn btn-danger">Excluir</button></th>
          </tr>

        </tbody>
      </table>
    </div>
  )
}

export default Clientes