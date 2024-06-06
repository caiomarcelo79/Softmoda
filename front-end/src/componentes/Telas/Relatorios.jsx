import { useState, useEffect } from 'react'
import Chart from 'react-apexcharts'

function Relatorios() {
  const [inicioData, setInicioData] = useState('')
  const [fimData, setFimData] = useState('')
  const [venda, setVenda] = useState([])
  const [filtradoVenda, setFiltradoVenda] = useState([])
  const [funcionarios, setFuncionarios] = useState([])
  const [receitaTotal, setReceitaTotal] = useState(0.00)
  const [despesaTotal, setDespesaTotal] = useState(0.00)

  useEffect(() => {
    fetch("http://localhost:8080/venda/listar")
      .then((retorno) => retorno.json())
      .then((retorno_convertido) => setVenda(retorno_convertido))
  }, [])

  useEffect(() => {
    fetch("http://localhost:8080/funcionario/listar")
      .then(retorno => retorno.json())
      .then(retorno_convertido => setFuncionarios(retorno_convertido))
  }, [])

  useEffect(() => {
    filtrarVendas()
  }, [inicioData, fimData, venda])

  useEffect(() => {
    calcularDespesas()
  }, [funcionarios])

  const filtrarVendas = () => {
    if (!inicioData || !fimData) {
      setFiltradoVenda(venda)
      calcularReceita(venda)
      return
    }
    const inicio = new Date(inicioData)
    const fim = new Date(fimData)
    const vendasFiltradas = venda.filter((venda) => {
      const dataVenda = new Date(venda.data)
      return dataVenda >= inicio && dataVenda <= fim
    })
    setFiltradoVenda(vendasFiltradas)
    calcularReceita(vendasFiltradas)
  }

  const calcularReceita = (vendas) => {
    let total = 0
    vendas.forEach((obj) => {
      total += parseFloat(obj.valor_compra)
    })
    setReceitaTotal(total)
  }

  const calcularDespesas = () => {
    let total = 0
    funcionarios.forEach((obj) => {
      total += parseFloat(obj.salario)
    })
    setDespesaTotal(total)
  }

  const lucroLiquido = receitaTotal - despesaTotal

  filtradoVenda.map(venda => console.log(venda.data))

  const chartData = {
    series: [{
      name: 'Vendas',
      data: filtradoVenda.map(venda => parseFloat(venda.valor_compra))
    }],
    options: {
      chart: {
        type: 'bar'
      },
      xaxis: {
        categories: filtradoVenda.map(venda => new Date(venda.data))
      }
    }
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
        <button onClick={filtrarVendas} className="btn btn-primary">Filtrar</button>
      </div>
      <br/>

      <div>
        <h2>Resumo Financeiro</h2>
        <p>Receita Total: R$ {receitaTotal.toFixed(2)}</p>
        <p>Despesas Totais: R$ {despesaTotal.toFixed(2)}</p>
        <p>Lucro Líquido: R$ {lucroLiquido.toFixed(2)}</p>
      </div>
      <br/>

      <div>
        <h2>Lucros</h2>
        <Chart options={chartData.options} series={chartData.series} type="bar" height={350} />
      </div>
      <br/>
    </div>
  )
}

export default Relatorios
