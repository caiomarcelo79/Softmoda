import axios from 'axios'
import { useState, useEffect } from 'react'
import ApexChart from "react-apexcharts"
import baseUrl from '../../Globais'

function Relatorios() {
  const [venda, setVenda] = useState([])
  const [funcionario, setFuncionario] = useState([])

  useEffect(() => {
    axios.get(`${baseUrl}/venda/listar`)
      .then((response) => {
        setVenda(response.data)
      })
  }, [])

  useEffect(() => {
    axios.get(`${baseUrl}/funcionario/listar`)
      .then((response) => {
        setFuncionario(response.data)
      })
  }, [])


  const calcularSalarioTotal = () => {
    var salarioTotal = 0

    funcionario.forEach((obj) => {
      salarioTotal += parseFloat(obj.salario)
    })


    return salarioTotal
  }

  const salarioTotal = calcularSalarioTotal()

  const grupoVendasPorMes = () => {
    const vendasPorMes = {}

    venda.forEach((obj) => {
      const data = new Date(obj.data_compra)
      const mes = `${data.getFullYear()}-${data.getMonth() + 1}`

      const fatura = parseFloat(obj.valor_compra)

      if (!vendasPorMes[mes]) {
        vendasPorMes[mes] = 0
      }

      vendasPorMes[mes] += fatura
    })

    return vendasPorMes
  }

  const vendasPorMes = grupoVendasPorMes()

  const calcularLucrosPorMes = () => {
    const lucrosPorMes = {}
    Object.keys(vendasPorMes).forEach((mes) => {
      const vendas = vendasPorMes[mes]
      const lucro = vendas - salarioTotal
      lucrosPorMes[mes] = lucro

    })

    return lucrosPorMes
  }

  const lucrosPorMes = calcularLucrosPorMes()

  const series = [
    {
      data: Object.values(lucrosPorMes)
    }
  ]

  const options = {
    xaxis: {
      categories: Object.keys(lucrosPorMes)
    },
    yaxis: {
      title: {
        text: "Lucro (R$)"
      }
    }
  }

  return (
    <div>
      <h1>Relatórios Financeiros</h1>

      <div>
        <h2>Lucros</h2>
        <ApexChart
          options={options}
          series={series}
          type="area"
          width={1000}
          height={500}
        />
      </div>
      <br/>
    </div>
  );
}

export default Relatorios;
