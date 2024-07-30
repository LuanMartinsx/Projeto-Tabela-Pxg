// import { useState, useEffect, FormEvent } from 'react';
// import { useRouter } from 'next/router';


// export interface Item {
//   quantidade: any;
//   monstros_id: number;
//   monstros_nome: string;
//   item_id: number;
//   item_nome: string;
//   item_preco: number;
// }

// interface Hunt {
//   id: number;
//   nome: string;
// }

// export interface Tabela {
//   id: number;
//   data: string;
//   hunt_name: string;
//   total_lucro: number;
// }

// export interface FormItensEditProps {
//   isOpen?: boolean;
//   onClose?: () => void;
//   onConfirm?: (items: Item[]) => void;
//   itens?: Item[];
//   opcao?: number | null;
//   hunts: Hunt[];
//   editMode?: boolean;
// }

// const FormItensEdit: React.FC<FormItensEditProps> = ({
//   itens: propItens,
//   opcao,
//   hunts,
//   isOpen,
//   onClose,
//   onConfirm,
//   editMode = false
// }) => {
//   const [itens, setItens] = useState<Item[]>(propItens || []);
//   const [quantidades, setQuantidades] = useState<{ [key: number]: number }>({});
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [editHuntId, setEditHuntId] = useState<number | null>(null);
//   const [huntLogId, setHuntLogId] = useState<number | null>(null)
//   const router = useRouter();

//   useEffect(() => {
//     if (!propItens) {
//       fetch("http://localhost:3000/api/itens")
//         .then(response => response.json())
//         .then(data => {
//           setItens(data.itens);
//           setLoading(false);
//         })
//         .catch(error => {
//           setError('Erro ao buscar os dados');
//           setLoading(false);
//         });
//     } else {
//       setLoading(false);
//     }
//   }, [propItens]);

//   useEffect(() => {
//       // Fetch hunt data for editing
//       fetch(`http://localhost:3000/api/tabela/huntLog`)
//         .then(response => response.json())
//         .then(data => {
//           console.log(data)
//           setHuntLogId(data.tabela)
//           setLoading(false);
//         }
//         )
//     }
//   , [huntLogId]);

//   const handleQuantidadeChange = (itemId: number, quantidade: number) => {
//     setQuantidades((prevQuantidades) => ({
//       ...prevQuantidades,
//       [itemId]: quantidade,
//     }));
//   };

//   const handleSubmit = async (event: React.FormEvent) => {
//     event.preventDefault();
  
//      // Supondo que `huntId` seja o `id` do registro que você deseja atualizar
//     // Substitua com o valor real
    
//     const requestBody = {
//       itens: Object.keys(quantidades).map(item_id => ({
//         item_id: parseInt(item_id),
//         quantidade: quantidades[parseInt(item_id)]
//       }))
//     };
  
//     try {
//       const response = await fetch(`http://localhost:3000/api/tabela/${huntLogId}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(requestBody),
//       });
  
//       if (!response.ok) {
//         throw new Error('Erro ao atualizar os dados');
//       }
  
//       alert('Dados Alterados com sucesso');
//     } catch (error) {
//       console.error('Erro ao atualizar os dados:', error);
//       alert('Erro ao atualizar os dados. Verifique o console para mais detalhes.');
//     }
//   };
  
//   const renderizarCabecalho = () => (
//     <tr className='flex gap-20 text-purple-500'>
//       <th className="text-left p-4">Item Nome</th>
//       <th className="text-left p-4">Item Preço</th>
//       <th className="text-left p-4">Quantidade</th> 
//     </tr>
//   );

//   const renderizarDados = () => {
//     if (loading) {
//       return (
//         <tr>
//           <td colSpan={3} className="text-center p-4">Carregando...</td>
//         </tr>
//       );
//     }

//     if (error) {
//       return (
//         <tr>
//           <td colSpan={3} className="text-center p-4">{error}</td>
//         </tr>
//       );
//     }

//     if (!Array.isArray(itens) || itens.length === 0) {
//       return (
//         <tr>
//           <td colSpan={3} className="text-center p-4">Nenhum item encontrado</td>
//         </tr>
//       );
//     }

//     return itens.map((item, i) => (
//       <tr key={i} className={`${i % 2 === 0 ? 'bg-purple-400' : 'bg-purple-500'}`}>
//         <td className="text-left p-4">{item.item_nome}</td>
//         <td className="text-right p-4">{item.item_preco}</td>
//         <td>
//           <input 
//             type='number' 
//             name='quantidade' 
//             value={quantidades[item.item_id] || 0}
//             placeholder='Quantidade' 
//             className='text-right text-black mt-4 place-self-end rounded w-2/3 ml-10' 
//             onChange={(e) => handleQuantidadeChange(item.item_id, parseInt(e.target.value))}
//           />
//         </td>
//       </tr>
//     ));
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <table className="w-full rounded overflow-hidden flex flex-col bg-purple-700">
//           <thead className="bg-gradient-to-r from-purple-700 to-zinc-900">{renderizarCabecalho()}</thead>
//           <tbody>{renderizarDados()}</tbody>
//         </table>
//         <div>
//           <button type="submit" className="rounded bg-purple-700 place-self-center text-2xl mt-4 mb-4">
//             Salvar
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default FormItensEdit;
