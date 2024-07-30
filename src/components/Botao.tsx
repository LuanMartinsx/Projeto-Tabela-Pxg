interface BotaoProps {
    cor?: 'Purple' | 'Black'
    onClick?: () => void
    children: any
    className?: any
    src?: any
    onPress?: () => void

}
// componente botão
export function Botao(props: BotaoProps) {
    return (
        <button className="text-center text-xl">
            {props.children}
        </button>
    )
}