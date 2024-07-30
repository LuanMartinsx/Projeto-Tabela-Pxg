import React, { useEffect, useState } from "react";
import { useAuth } from "./AuthContext";


// Componente responsavel por realizar a soma da tabela hunt log baseado no usuario que estiver logado.
const FormTotal: React.FC = () => {
  const [total, setTotal] = useState<number | null>(null);
  const { userId } = useAuth();

  useEffect(() => {
    const fetchTotal = async () => {
      if (!userId) return; // Não faz a requisição se o usuário não estiver logado

      try {
        const token = localStorage.getItem('token');
        if (!token) throw new Error('Token não encontrado');

        const response = await fetch('http://localhost:3000/api/total', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error('Erro ao buscar total');
        }

        const data = await response.json();
        setTotal(data.total.total_lucro);
      } catch (error) {
        console.error('Erro ao buscar total:', error);
      }
    };

    fetchTotal();
  }, [userId]);

  return (
    <div className="flex flex-col w-72 h-32">
      <div className="bg-gradient-to-r from-purple-700 to-zinc-900 flex justify-center text-2xl p-4">
        <h2>Valor Total</h2>
      </div>
      <div className="flex flex-col h-2/3 w-full justify-center bg-purple-400 items-center">
        <h2>{total !== null ? total.toLocaleString('pt-BR') : 'Carregando...'}</h2>
      </div>
    </div>
  );
};

export default FormTotal;
