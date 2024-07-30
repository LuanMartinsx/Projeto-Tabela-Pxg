import { useEffect, useState } from 'react';
import router, { useRouter } from 'next/router';
import { useAuth } from './AuthContext';

export interface Item {
  hunt_id: number;
  quantidade: any;
  monstros_id: number;
  monstros_nome: string;
  item_id: number;
  item_nome: string;
  item_preco: number;
}

interface Hunt {
  id: number;
  nome: string;
}

export interface FormItensProps {
  isOpen?: boolean;
  onClose?: () => void;
  onConfirm?: (items: Item[]) => void;
  itens?: Item[];
  huntId?: number;
  opcao?: number | null;
  hunts: Hunt[];
  editMode?: boolean;
}

const FormItens: React.FC<FormItensProps> = ({
  itens: propItens,
  opcao,
  hunts,
  huntId,
  isOpen,
  onClose,
  onConfirm,
  editMode = false
}) => {
  const [itens, setItens] = useState<Item[]>(propItens || []); // estado que utilizada uma array de itens da interface item
  const [quantidades, setQuantidades] = useState<{ [key: number]: number }>({}); // estado relativo a quantidade de itens fornecido pelo usuario
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { userId } = useAuth();

  useEffect(() => {
    if (!propItens) {
      fetch("http://localhost:3000/api/itens") // chama api que contem os itens
        .then(response => response.json())
        .then(data => {
          const itensFiltrados = data.itens.filter((item: Item) => item.hunt_id === opcao); // filtra os itens baseado na hunt que o usuario escolheu
          setItens(itensFiltrados); // coloca os itens filtrados no estado itens 
          setLoading(false);
        })
        .catch(error => {
          setError('Erro ao buscar os dados');
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [propItens, opcao]);


  const handleQuantidadeChange = (itemId: number, quantidade: number) => {
    setQuantidades((prevQuantidades) => ({
      ...prevQuantidades,
      [itemId]: quantidade,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (userId === null) {
      alert('User not authenticated');
      return;
    }
    // responsavel por pegar a quantidade de itens que o usuario forneceu e fazer a soma dos itens
    const totalLucro = itens.reduce((total, item) => {
      const quantidade = quantidades[item.item_id] || 0;
      return total + quantidade * item.item_preco;
    }, 0);

    const data = new Date().toISOString();

    try {
      // aqui precisa ser revisto visto que o modo edição ainda não foi implementado
      const response = await fetch(editMode ? '/api/tabela' : '/api/save-hunt', {
        method: editMode ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: editMode ? huntId : undefined,
          hunt_id: opcao,
          hunt_name: hunts.find(hunt => hunt.id === opcao)?.nome,
          total_lucro: totalLucro,
          data,
          userId,
        }),
      });

      if (response.ok) {
        alert('Dados salvos com sucesso');
        if (onConfirm) {
          onConfirm(itens);
        }
        if (onClose) {
          onClose();
        }
        router.push('/mainPage'); // após a conclusão volta a pagina para o main page
      } else {
        const errorData = await response.json();
        console.error('Erro ao salvar os dados:', errorData);
        alert(`Erro ao salvar os dados: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Erro ao salvar os dados:', error);
      alert('Erro ao salvar os dados');
    }
  };

  const renderizarCabecalho = () => (
    <tr className='flex gap-20 text-purple-500'>
      <th className="text-left p-4">Item Nome</th>
      <th className="text-left p-4">Item Preço</th>
      <th className="text-left p-4">Quantidade</th> 
    </tr>
  );

  const renderizarDados = () => {
    if (loading) {
      return (
        <tr>
          <td colSpan={3} className="text-center p-4">Carregando...</td>
        </tr>
      );
    }

    if (error) {
      return (
        <tr>
          <td colSpan={3} className="text-center p-4">{error}</td>
        </tr>
      );
    }

    if (!Array.isArray(itens) || itens.length === 0) {
      return (
        <tr>
          <td colSpan={3} className="text-center p-4">Nenhum item encontrado</td>
        </tr>
      );
    }

    // map responsavel por carregar o nome, preço e o input de quantidade para o usuario
    return itens.map((item, i) => (
      <tr key={i} className={`${i % 2 === 0 ? 'bg-purple-400' : 'bg-purple-500'}`}>
        <td className="text-left p-4">{item.item_nome}</td>
        <td className="text-right p-4">{item.item_preco}</td>
        <td>
          <input 
            type='number' 
            name='quantidade' 
            value={quantidades[item.item_id] || ''}
            placeholder='Quantidade' 
            className='text-right text-black mt-4 place-self-end rounded w-2/3 ml-10' 
            onChange={(e) => handleQuantidadeChange(item.item_id, parseInt(e.target.value))} // pega o valor digitado pelo usuario em quantidades
          />
        </td>
      </tr>
    ));
  };

  return (
    <form onSubmit={handleSubmit}>
      <table className="w-full rounded overflow-hidden flex flex-col bg-purple-700">
        <thead className="bg-gradient-to-r from-purple-700 to-zinc-900">{renderizarCabecalho()}</thead>
        <tbody>{renderizarDados()}</tbody>
      </table>
      <button type="submit" className='rounded bg-purple-700 place-self-center text-2xl mt-4 mb-4 text-white'>Enviar</button>
    </form>
  );
};

export default FormItens;
