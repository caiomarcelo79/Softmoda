type CardProps = {
  name: string
  urlImg: string
  altImg: string
}

export default function Card({ name, urlImg, altImg }: CardProps) {
  return (
    <div className="relative w-full h-full flex justify-center">
      <img
        className="z-0 max-h-full w-auto object-cover"
        src={urlImg}
        alt={altImg}
      />

      {/*
      <div className="absolute inset-0 bg-primaryBack bg-opacity-50 z-10" />
      */}

      <div className="absolute flex items-center justify-center inset-0 font-inter text-secondaryText text-5xl z-20">
        {name}
      </div>
    </div>
  )
}
