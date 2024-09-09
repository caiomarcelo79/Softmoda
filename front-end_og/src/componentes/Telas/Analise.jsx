import axios from "axios";
import React, { useState, useEffect } from "react";
import ApexChart from "react-apexcharts";


function Analise() {
  const [venda, setVenda] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:8080/venda/listar")
    .then((response)=>{
      setVenda(response.data)
    })
  }, [])

  


  const grupoVendasPorMes = ()=>{
    const vendasPorMes = {};
    venda.forEach((obj) => {
      const data = new Date(obj.data_compra);
      const mes = `${data.getFullYear()}-${data.getMonth() + 1}`
      if (!vendasPorMes[mes]) {
        vendasPorMes[mes] = 0
      }
      vendasPorMes[mes]++
    })
    return vendasPorMes
  }

  const vendasPorMes = grupoVendasPorMes();
  console.log(vendasPorMes)

  const series = [
    {
      data: Object.values(vendasPorMes)
    }
  ]

  const options = {
    xaxis: {
      categories: Object.keys(vendasPorMes)
    },
    yaxis: {
      title: {
        text: "Número de Vendas"
      }
    }
  }

  return (
    <div>
      <ApexChart
      options={options}
      series={series}
      type="area"
      width={1000}
      height={500}
      
      />
    </div>
  );
}

export default Analise;
