
import Navegador from "@/components/Navegador";
import Imagem from "@/components/Imagem";
import { useAuth } from "@/components/AuthContext";
import { useEffect } from "react";
import Footer from "@/components/Footer";


export default function Home() {

  const { userId } = useAuth(); // seta a const userId como uma função do autenticador

  useEffect(() => {
    if (!userId) {
      window.location.href = '/'; // Redirecionar para a página de login se não estiver autenticado
    }
  }, [userId]);

  return (
    
    <main className="h-screen w-screen bg-gradient-to-t from-purple-700 to-black z-10">
      {/* Cabeçalho */}
      <header className="bg-gradient-r from-purple-700 to-black p-6 flex flex-row gap-48 h-1/6">
        <div className="w-1/6 flex flex-row gap-4 justify-start">
          <Imagem src="/img/Psychic.png" width={48} height={48} alt={"Psychic"}/>
          <Imagem src="/img/Fairy.png" width={48} height={48} alt={"Psychic"}/>
        </div>
        <h1 className="text-6xl text-start w-5/6 pt-3">Programa de Conquistas do PXG!</h1>
      </header>
      {/* Main */}
      <div className="h-4/6 flex flex-row justify-center gap-32">
        <div className="flex flex-col justify-center">
          {/* Gif da Gardevoir */}
          <div className="bg-purple-500 p-24">
            <Imagem src="/img/Gardevoir.gif" width={132} height={96} alt={"Psycraft"}/> 
          </div>
          {/* Utilizado para acessar as paginas, futuramente alterar para usar o useRouter */}
          <div className="flex flex-col bg-purple-900 p-8 justify-center items-center w-full text-2xl">
            <Navegador destino='/Perfil' texto="Pokemons" />
          </div>

        </div >
        <div className="flex flex-col justify-center">
           {/* Gif do Alakazam */}
          <div className="bg-purple-500 p-32">
            <Imagem src="/img/ShiAlakazam.gif" width={132} height={96} alt={"Alakazam"}/>
          </div>
        {/* Utilizado para acessar as paginas, futuramente alterar para usar o useRouter */}
          <div className="flex flex-col bg-purple-900 p-8 justify-center items-center w-full text-2xl">
            <Navegador destino='/Conquistas' texto="Conquistas" />
          </div>

        </div>
        <div className="flex flex-col justify-center">
          {/* Gif da Sylveon */}
          <div className="bg-purple-500 p-24">
            <Imagem src="/img/ShinySylveon.gif" width={132} height={96} alt={"Sylveon"}/>

          </div>
          {/* Utilizado para acessar as paginas, futuramente alterar para usar o useRouter */}
          <div className="flex flex-col bg-purple-900 p-8 justify-center items-center w-full text-2xl">
            <Navegador destino='/Farm' texto="Tabela de Farm" />

          </div>

        </div>
      </div>
      {/* o footer está chamando um componente footer que traz o nome do desenvolvedor */}
      <footer className="h-1/6 flex flex-col bg-gradient-to-b from-purple-700 to-black justify-end">
        <Footer/>
      </footer>
    </main>
    
  );
}
