
import { useAuth } from "@/components/AuthContext";
import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import { useEffect } from "react";




export default function Farm() {
// Pagina responsavel por conter a tabela de ganhos
  const { userId } = useAuth(); // seta a constante userId como uma função do autenticador

  useEffect(() => {
    if (!userId) {
      window.location.href = '/'; // Redirecionar para a página de login se não estiver autenticado
    }
  }, [userId]);
  
    return (
      <div className="flex flex-col h-screen">
        {/* chama o componente layout e o componente tabela */}
        <Layout titulo="Tabela de Farm do PXG"> 
         
          <Tabela opcao={null} hunts={[]}></Tabela>
         
        </Layout>
      </div>
    );
  }