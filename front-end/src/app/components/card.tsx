import Image from 'next/image'
import history from '../public/imgs/history.jpg'

type CardProps = {
  name: string
  image: any
  alt: string
}

export default function Card({ name }: CardProps) {
  return (
    <div>
      <h1>{name}</h1>
      <Image alt="History" src={history} />
    </div>
  )
}
