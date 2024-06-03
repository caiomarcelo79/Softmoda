function Promocoes(){

  return(
    <div>
      <h1>Promoções</h1>
      <br/><br/>
      <form>
        <h2>Crie uma promoção</h2>
        <br/>
        <input type="text" placeholder="Nome da promoção. ex: verao2024" className="form-control"/>
        <br/>
        <input type="number" placeholder="Desconto" min={0} max={100} className="form-control"/>
        <br/>
        <input type="date" placeholder="Validade" className="form-control"/>
        <br/>
        <input type="text" placeholder="Condições de uso" className="form-control"/>
        <br/>
  
        <input type="button" value='Crie' className="btn btn-primary"/>
      </form>
      <br/>
      <table className="table">
        <thead>
          <tr>
            <th>Id_Promocao</th>
            <th>Promoção</th>
            <th>Desconto</th>
            <th>Validade</th>
            <th>Condições de uso</th>
            <th></th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          
          <tr key="Promoção">
            <th>197532</th>
            <th>verao2024</th>
            <th>15%</th>
            <th>25/07/2024</th>
            <th>Short / Regata</th>
            <th><button className="btn btn-warning">Alterar</button></th>
            <th><button className="btn btn-danger">Excluir</button></th>
          </tr>

        </tbody>
      </table>
    </div>
  )
}

export default Promocoes