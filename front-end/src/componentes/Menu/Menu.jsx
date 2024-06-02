import './Menu.css'

function Menu(){

  return(
    <div>
      <h1 className='ms-4'>Menu</h1>
      <ul className='btn-menu'>
        <li><a href="/inventario">Inventário/Estoque</a></li>
        <li><a href="/vendas">Histórico de vendas</a></li>
        <li><a href="/clientes">Clientes cadastrados</a></li>
        <li><a href="/analise">Análise de vendas</a></li>
        <li><a href="/promocoes">Promoções e descontos</a></li>
        <li><a href="/fornecedores">Fornecedores</a></li>
        <li><a href="/marketing">Ferramentas de marketing</a></li>
        <li><a href="/pessoal">Gestão pessoal</a></li>
        <li><a href="/relatorios">Relatorios financeiros</a></li>
      </ul>
    </div>
  )
}

export default Menu