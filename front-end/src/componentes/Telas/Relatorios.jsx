import { useState, useEffect, useRef } from 'react';

function Relatorios() {
  const [inicioData, setInicioData] = useState('');
  const [fimData, setFimData] = useState('');


  const dataFiltro = () => {
    
  };


  

  return (
    <div>
      <h1>Relatórios Financeiros</h1>

      <div className="filters">
        <h2>Filtrar Relatórios</h2>
        <label>
          Data de Início:
          <input 
            type="month" 
            value={inicioData} 
            onChange={(e) => setInicioData(e.target.value)} 
            className="form-control" 
          />
        </label>
        <label>
          Data de Fim:
          <input 
            type="month" 
            value={fimData} 
            onChange={(e) => setFimData(e.target.value)} 
            className="form-control" 
          />
        </label>
        <br/><br/>
        <button onClick={dataFiltro} className="btn btn-primary">Filtrar</button>
      </div>
      <br/>

      <div className="summary">
        <h2>Resumo Financeiro</h2>
        <p>Receita Total: R$ 100,000</p>
        <p>Despesas Totais: R$ 50,000</p>
        <p>Lucro Líquido: R$ 50,000</p>
      </div>
      <br/>

      <div>
        <h2>Lucros</h2>
        <h3>Grafico aqui</h3>
      </div>
      <br/>

      <div className="report-table">
        <h2>Relatórios</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Id_Relatório</th>
              <th>Mês</th>
              <th>Tipo</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>798254</td>
              <td>06/2024</td>
              <td>Vendas</td>
              <td>
                <button className="btn btn-secondary">Detalhes</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Relatorios;
