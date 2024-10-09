import Card from './components/card'

export default function Home() {
  return (
    <div className="flex justify-center items-center">
      <Card
        name="Histórico"
        overlayColor="bg-primaryBack"
        urlImg="https://static.vecteezy.com/system/resources/previews/004/925/704/non_2x/spreadsheet-table-paper-with-pencil-finance-development-banking-account-statistics-investment-analytic-research-data-economy-trading-office-reporting-business-company-concept-free-photo.jpg"
        altImg="historico"
      />
      <Card
        name="Cadastre"
        overlayColor="bg-secondaryBack"
        urlImg="https://leadgenapp.io/wp-content/uploads/2022/05/writing-1.png"
        altImg="cadastro"
      />
      <Card
        name="Relatórios"
        overlayColor="bg-terciaryBack"
        urlImg="https://blog.flaviarita.com/wp-content/uploads/2020/07/relatorio-de-negocios-graficos-e-graficos-relatorios-de-negocios-e-pilha-de-documentos-conceito-de-negocios_1150-2254.jpg"
        altImg="relatorios"
      />
    </div>
  )
}
