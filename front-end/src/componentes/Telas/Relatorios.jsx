import { useState, useEffect, useRef } from 'react';

function Relatorios() {
  const [inicioData, setInicioData] = useState('');
  const [fimData, setFimData] = useState('');


  const dataFiltro = () => {
    
  };

  const telaRef = useRef(null)
  const graficoRef = useRef(null)

  useEffect(() => {
    const ctx = telaRef.current

    console.log(ctx)


    graficoRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Janeiro', 'Feveiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [{
          label: 'Lucros 2024',
          data: [12, 19, 18, 16, 15, 19, 25, 14, 20, 23,20, 30],
          borderWidth: 7,
          borderColor: '#9b0000',
          backgroundColor: '#9b0000bb',
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    })

    return () => {
      graficoRef.current.destroy()
    }
  }, [])


  const grafico = {
    width: "70vw",
  }
  

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
            onChange={(event) => setInicioData(event.target.value)} 
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

      <div style={grafico}>
        <h2>Lucros</h2>
        <canvas ref={telaRef}></canvas>
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
