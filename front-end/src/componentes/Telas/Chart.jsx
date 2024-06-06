import React, { useState, useEffect } from "react";
import ApexChart from "react-apexcharts";

function Chart() {
  const [venda, setVenda] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/venda/listar")
      .then((retorno) => retorno.json())
      .then((retorno_convertido) => setVenda(retorno_convertido));
  }, []);

  // Função para agrupar vendas por mês
  const agrupamentoVendasPorMes = ()=>{
    const vendasPorMes = {};
    venda.forEach((obj) => {
      const data = new Date(obj.data_compra);
      const mes = `${data.getFullYear()}-${data.getMonth() + 1}`;
      if (!vendasPorMes[mes]) {
        vendasPorMes[mes] = 0;
      }
      vendasPorMes[mes]++;
    });
    return vendasPorMes;
  };

  const vendasPorMes = agrupamentoVendasPorMes();

  const series = [
    {
      data: Object.values(vendasPorMes),
    },
  ];

  const options = {
    xaxis: {
      categories: Object.keys(vendasPorMes),
    },
    yaxis: {
      title: {
        text: "Número de Vendas",
      },
    },
  };

  return (
    <div>
      <h2>Número de Vendas por Mês</h2>
      <ApexChart options={options} series={series} type="bar" width={640} height={400} />
    </div>
  );
}

export default Chart;
