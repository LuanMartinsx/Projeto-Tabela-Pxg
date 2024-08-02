import Image from "next/image"

interface imagemProps {
    src?: any
    width: any
    height: any
    alt: any
}

// componente para carregar imagem
export default function Imagem(props: imagemProps) {
    return (
        <div>
            <Image
      src={props.src}
      width={props.width}
      height={props.height}
      alt={props.alt}
    />
        </div>
    )
}