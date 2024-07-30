interface tituloProps {
    children?: any
}

// componente responsavel por renderizar os titulos
export default function Titulo(props: tituloProps) {
    return(
        <div className={`flex flex-col justify-center bg-pink-800`}>
            <h1 className={`pl-5 py-2 text-2xl`}>{props.children}</h1>
            <hr className={`border-2 border-purple-500`} />
        </div>
    )
}