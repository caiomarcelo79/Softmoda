import './style.css'

type CardProps = {
  name: string
  urlImg: string
  altImg: string
  overlayColor: string
}

export default function Card({
  name,
  urlImg,
  altImg,
  overlayColor,
}: CardProps) {
  return (
    <div className="containerStyle">
      <img className="imageStyle" src={urlImg} alt={altImg} />

      <div className={`colorStyle ${overlayColor}`} />

      <div className="textStyle text-secondaryText">{name}</div>
    </div>
  )
}
