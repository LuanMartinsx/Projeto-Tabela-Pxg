import { useState, useEffect } from 'react';
import Modal from './Modal';
import FormItens from './FormItens';
import Mobs from '@/core/mobs'; 
import { Item } from './FormItens';


interface Hunt {
  id: number;
  nome: string;
}

interface FormHuntProps {
  itens?: Item[];
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (huntId: number) => void;
}

const FormHunt: React.FC<FormHuntProps> = ({ isOpen, onClose, onConfirm,  }) => {
  const [opcao, setOpcao] = useState<number | null>(null); // estados
  const [mobs, setMobs] = useState<Mobs[]>([]);
  const [itens, setItens] = useState<Item[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hunts, setHunts] = useState<Hunt[]>([])

  useEffect(() => {
    fetch('http://localhost:3000/api/hunts') // chama a api responsavel pelas hunts
      .then(response => response.json())  // pega a resposta e transforma em json
      .then(data => setHunts(data.hunts)) // pega os dados trasnformados em json e seta para hunts
      .catch(error => console.error('Erro ao buscar os dados de Hunts:', error)); // mensagem de erro caso algo de errado

    fetch('http://localhost:3000/api/mobs')
      .then(response => response.json())
      .then(data => setMobs(data.mobs.map((mob: any) => new Mobs(mob.id, mob.nome))))
      .catch(error => console.error('Erro ao buscar os dados de mobs:', error));

    fetch('http://localhost:3000/api/itens')
      .then(response => response.json())
      .then(data => setItens(data.itens))
      .catch(error => console.error('Erro ao buscar os dados de itens:', error));
  }, []);

// função responsavel por pegar o id da opção que o usuario escolheu e setar no estado opção
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = parseInt(event.target.value);
    setOpcao(selectedId);
  };

  // função responsavel por confirmar o evento quando disparado e abrir a modal
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsModalOpen(true);
  };

// função para fechar a modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // map responsavel por buscar as opções de hunt da api de hunts e aparecer o nome delas para o usuario
  const renderizarOpcoes = () => {
    if (!Array.isArray(hunts)) {
      return null;
    }
    return hunts.map((hunt) => (
      <option key={hunt.id} value={hunt.id}>
        {hunt.nome}
      </option>
    ));
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="w-72 h-64 flex flex-col bg-purple-500 items-center gap-12">
        <div className='bg bg-purple-600 w-72 h-12 justify-center items-center'>
        <h1 className=' pt-2 text-white'>SELECIONE A HUNT</h1>
        </div>
        <select id="opcoes" value={opcao || ''} onChange={handleChange} className="text-white bg-purple-600 mb-6">
          <option value="">Selecione...</option>
          {renderizarOpcoes()}
        </select>
        <button type="submit" className='bg-purple-800 w-72 h-16 text-white text-2xl'>Enviar</button>
      </form>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {opcao !== null && (
          <FormItens
            itens={itens.filter(item => item.hunt_id === opcao)}
            opcao={opcao}
            hunts={hunts}
            
          />
        )}
      </Modal>
    </div>
  );
};

export default FormHunt;


