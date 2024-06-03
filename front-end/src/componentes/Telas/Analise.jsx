import { useEffect, useRef } from "react"


function Analise() {
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
          label: 'Vendas 2024',
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
      <h1>Análise</h1>
      <div style={grafico}>
        <canvas ref={telaRef}></canvas>
      </div>
    </div>
  );
}

export default Analise;
