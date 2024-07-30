import Link from "next/link";

interface navegadorProps {
    destino?: any
    texto?: string
}

// o navegador foi muito pouco utilizado pois preferi utilizar o router
export default function Navegador(props: navegadorProps) {
    return(
        <Link href={props.destino}>{props.texto}</Link>
    )
}