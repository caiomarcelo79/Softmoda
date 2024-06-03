function Pessoal(){

  return(
    <div>
      <h1>Gestão de Pessoal</h1>

      <ul className='btn-menu'>
        <li><a href="/pessoal/cadastre">Cadastre um funcionario</a></li>
        <li><a href="/pessoal/analise">Analise de desempenho do funcionario</a></li>
        <li><a href="/pessoal/listar">Listar todos os funcionários</a></li>
      </ul>
      
    </div>
  )
}

export default Pessoal