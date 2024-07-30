// interface EntradaProps {
//     texto?: string
//     tipo?: 'text' | 'number'
//     valor?: any
//     className?: any
//     leitura?: boolean
//     holder?: any
//     preco?: string

// }

// export function Entrada(props: EntradaProps) {
//     return (
//         <div className="flex flex-row justify-between bg-purple-400">
//             <label className="text-3xl w-1/3 pl-4">
//                 {props.texto}
//             </label>
//             <label className="text-3xl w-1/3 pl-4">
//                 {props.preco}
//             </label>
//             <input  type={props.tipo ?? 'text'}
//             value={props.valor}
//             readOnly={props.leitura}
//             placeholder={props.holder}
//             className="bg-purple-500 flex justify-center items-end w-2/3 text-end pr-4"/>

//         </div>
//     )
// }