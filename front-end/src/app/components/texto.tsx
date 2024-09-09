type TextoProps = {
  texto: string
}


export default function Texto({ texto }: TextoProps){
  return <h1>{texto}</h1>
}