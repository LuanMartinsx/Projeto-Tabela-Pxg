import Aquisicoes from "@/components/Aquisicoes"
import { useAuth } from "@/components/AuthContext";
import Layout from "@/components/Layout"
import { useEffect } from "react";

interface conquistaProps {
    children?: any
}

export default function Conquistas(props: conquistaProps) {
// PAGINA EM CRIAÇÃO

    const { userId } = useAuth(); // seta a constante userId como uma função do autenticador

  useEffect(() => {
    if (!userId) {
      window.location.href = '/'; // Redirecionar para a página de login se não estiver autenticado
    }
  }, [userId]);
    return(
        <div>
            <Layout titulo="Conquistas do Mes">
                <Aquisicoes></Aquisicoes>
            </Layout>
        </div>
    )
}