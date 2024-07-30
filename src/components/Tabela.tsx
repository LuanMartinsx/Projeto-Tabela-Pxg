import { useEffect, useState } from 'react';
import { parseISO } from 'date-fns';
import { format as formatTZ, toDate } from 'date-fns-tz';
import ModalExcluir from './ModalExcluir';
import { Hunt, } from '@prisma/client';
import { Item, FormItensProps } from './FormItens';
import { Trash2 } from 'lucide-react';
// import { useAuth } from './AuthContext';
// import ModalEditar from './ModalEditar';
// import FormHuntEdit from './componentsMain/FormHuntEdit';
// import FormItensEdit from './componentsMain/FormItensEdit';


interface TabelaProps {
  itens?: Item[];
  opcao: number | null;
  hunts: Hunt[];
}

export interface TabelaId {
  id: number;
}

export interface Tabela {
  id: number;
  data: string;
  hunt_name: string;
  total_lucro: number;
}

const Tabela: React.FC<TabelaProps> = ({ itens: propItens, opcao, hunts }) => {
  const [data, setData] = useState<Tabela[]>([]);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteHuntId, setDeleteHuntId] = useState<number | null>(null);
  // const [isEditHuntModalOpen, setIsEditHuntModalOpen] = useState(false);
  // const [isEditItemsModalOpen, setIsEditItemsModalOpen] = useState(false);
  // const [editHuntId, setEditHuntId] = useState<number | null>(null);
  // const { userId } = useAuth(); // Obtém o userId do contexto de autenticação

  useEffect(() => {
    const fetchHuntLog = async () => {
      try {
        const token = localStorage.getItem('token');
        // pega os dados da api huntlog que contem os dados da tabela
        const response = await fetch('/api/huntLog', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        const data = await response.json();
        const transformedData = data.tabela.map((entry: Tabela) => {
          const parsedDate = parseISO(entry.data);
          const formattedDate = formatTZ(toDate(parsedDate), 'dd/MM/yyyy', { timeZone: 'America/Sao_Paulo' }); // transforma o formato data
          return {
            ...entry,
            data: formattedDate,
          };
        });
        setData(transformedData);
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
      }
    };

    fetchHuntLog();
  }, []);


  // função responsavel por deletar um dado na tabela
  const handleDelete = async () => {
    if (deleteHuntId !== null) {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch(`/api/huntLog?id=${deleteHuntId}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        if (response.ok) {
          setData(data.filter((entry) => entry.id !== deleteHuntId));
        } else {
          console.error('Erro ao deletar a entrada:', await response.json());
        }
      } catch (error) {
        console.error('Erro ao deletar a entrada:', error);
      } finally {
        setDeleteHuntId(null);
        setIsDeleteModalOpen(false);
      }
    }
  };

  // função responsavel por pegar o id e abrir a modal de confirmação
  const handleDeleteClick = (id: number) => {
    setDeleteHuntId(id);
    setIsDeleteModalOpen(true);
  };

  function renderizarCabecalho() {
    return (
      <tr>
        <th className="text-left p-4">Data</th>
        <th className="text-center p-4">Hunt</th>
        <th className="text-right p-4">Valores</th>
        <th className="text-right p-4">Ações</th>
      </tr>
    );
  }


  // map responsavel por trazer os dados da tabela da api
  function renderizarDados() {
    if (!Array.isArray(data)) {
      return null;
    }
    return data.map((entry, i) => {
      return (
        <tr key={entry.id} className={i % 2 === 0 ? 'bg-purple-400' : 'bg-purple-500'}>
          <td className="text-left p-4 text-white text-xl font-bold">{entry.data}</td>
          <td className="text-center p-4 text-white text-xl font-bold">{entry.hunt_name}</td>
          <td className="text-right p-4 text-black text-xl font-bold">{entry.total_lucro.toLocaleString('pt-BR')}</td>
          <td className="text-right p-4">
            <button onClick={() => handleDeleteClick(entry.id)} className='text-purple-950'><Trash2/></button>
          </td>
        </tr>
      );
    });
  }

  return (
    <div className='max-h-[700px] overflow-y-auto'>
      <table className="w-full rounded">
        <thead className="bg-gradient-to-r from-purple-700 to-zinc-900">{renderizarCabecalho()}</thead>
        <tbody className="w-full">{renderizarDados()}</tbody>
      </table>
      <ModalExcluir
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDelete}
      />
    </div>
  );
};

export default Tabela;