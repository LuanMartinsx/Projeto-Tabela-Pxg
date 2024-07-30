// import { useEffect, useState } from 'react';
// import ModalEditar from '../ModalEditar';
// import FormItensEdit, { Item } from './FormItensEdit'; // Importe o componente de edição e as interfaces necessárias
// import Mobs from '@/core/mobs';

// interface Hunt {
//   id: number;
//   nome: string;
// }

// interface FormHuntEditProps {
//   isOpen: boolean;
//   onClose: () => void;
//   onConfirm: (huntId: number, items: Item[]) => void;
// }

// const FormHuntEdit: React.FC<FormHuntEditProps> = ({ isOpen, onClose, onConfirm }) => {
//   const [opcao, setOpcao] = useState<number | null>(null);
//   const [mobs, setMobs] = useState<Mobs[]>([]);
//   const [itens, setItens] = useState<Item[]>([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [editHuntId, setEditHuntId] = useState<number | null>(null);
//   const [hunts, setHunts] = useState<Hunt[]>([]);

//   useEffect(() => {
//     fetch('http://localhost:3000/api/hunts')
//       .then(response => response.json())
//       .then(data => setHunts(data.hunts))
//       .catch(error => console.error('Erro ao buscar os dados de Hunts:', error));

//     fetch('http://localhost:3000/api/mobs')
//       .then(response => response.json())
//       .then(data => setMobs(data.mobs.map((mob: any) => new Mobs(mob.id, mob.nome))))
//       .catch(error => console.error('Erro ao buscar os dados de mobs:', error));

//     fetch('http://localhost:3000/api/itens')
//       .then(response => response.json())
//       .then(data => setItens(data.itens))
//       .catch(error => console.error('Erro ao buscar os dados de itens:', error));
//   }, []);

//   const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     const selectedId = parseInt(event.target.value);
//     setOpcao(selectedId);
//   };

//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setIsModalOpen(true);
//   };

//   const handleEdit = (huntId: number) => {
//     setIsModalOpen(true);
//     setEditHuntId(huntId); // Define o ID de edição ao abrir a modal para editar
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setEditHuntId(null); // Limpa o ID de edição ao fechar a modal
//   };

//   const handleConfirm = (items: Item[]) => {
//     if (opcao !== null) {
//       onConfirm(opcao, items);
//     }
//     handleCloseModal();
//   };

//   const renderizarOpcoes = () => {
//     if (!Array.isArray(hunts)) {
//       return null;
//     }
//     return hunts.map((hunt) => (
//       <option key={hunt.id} value={hunt.id}>
//         {hunt.nome}
//       </option>
//     ));
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit} className="w-72 h-72 flex flex-col bg-purple-500 justify-center items-center gap-3">
//         <h1>SELECIONE A HUNT</h1>
//         <select id="opcoes" value={opcao || ''} onChange={handleChange} className="text-black">
//           <option value="">Selecione...</option>
//           {renderizarOpcoes()}
//         </select>
//         <button type="submit">Enviar</button>
//       </form>
//       <ModalEditar isOpen={isModalOpen} onClose={handleCloseModal}>
//         {opcao !== null && (
//           <FormItensEdit
//             itens={itens.filter(item => item.monstros_id === opcao)}
//             opcao={opcao}
//             hunts={hunts}
//             huntLogId={editHuntId !== null ? editHuntId : 0} // Passa editHuntId para editar se estiver definido
//             onClose={() => setIsModalOpen(false)}
//             onConfirm={handleConfirm} // Chama handleConfirm no onConfirm
//           />
//         )}
//       </ModalEditar>
//     </div>
//   );
// };

// export default FormHuntEdit;
