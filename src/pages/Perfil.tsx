import { useAuth } from "@/components/AuthContext";
import Layout from "@/components/Layout"
import Pokemons from "@/components/Pokemons"
import { useEffect } from "react";



export default function Perfil() {
// PAGINA EM CRIAÇÃO
    const { userId } = useAuth();

  useEffect(() => {
    if (!userId) {
      window.location.href = '/'; // Redirecionar para a página de login se não estiver autenticado
    }
  }, [userId]);
    return (
        <div className="">
            <Layout titulo="Meus Pokemons">
                <Pokemons></Pokemons>
            </Layout>
        </div>

            

    )
}