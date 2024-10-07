import Card from './components/card'

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card name="Card 1" />
      <Card name="Card 2" />
      <Card name="Card 3" />
    </div>
  )
}
