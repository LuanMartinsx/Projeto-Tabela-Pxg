import Footer from "@/components/Footer";
import Imagem from "@/components/Imagem";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter() // funcão para utilizar navegação no next no caso com ela é possivel navegar entre as paginas 

  return (

    // Pagina inicial do Projeto //
    <main className="flex flex-col h-screen w-screen bg-gradient-to-t from-purple-700 to-black z-10">
    
    {/* Cabeçalho */}
     <header className="bg-gradient-r from-purple-700 to-black h-32 p-6 flex flex-row gap-48"> 
        <div className="w-1/6 flex flex-row gap-4 justify-start">
          <Imagem src="/img/Psychic.png" width={48} height={48} alt={"Psychic"}/>
          <Imagem src="/img/Fairy.png" width={48} height={48} alt={"Psychic"}/>
        </div>
        <h1 className="text-6xl text-start w-5/6 pt-3">Programa de Conquistas do PXG!</h1>
      </header>

    {/* Corpo */}
     <div className="h-3/4 flex flex-row justify-center gap-32 items-center">
      <div>
          {/* Imagem da Sylveon */}
          <Imagem src="/img/Sylveon.png" width={360} height={370} alt={"Sylveon"}/>
        </div>
        {/* As funções abaixos são responsáveis por redirecionar as paginas para a pagina de login  e a pagina de registro */}
        <div><button onClick={() => {router.push('/login')}} className="bg-purple-950 border border-pink-600 rounded p-4 text-2xl hover:bg-pink-600">SIGN IN</button></div>
        <div><button onClick={() => {router.push('/register')}} className="bg-purple-950 border border-pink-600 rounded p-4 text-2xl hover:bg-pink-600">REGISTER</button></div>
        <div>
          {/* Imagem do Mew */}
          <Imagem src="/img/mew.png" width={360} height={370} alt={"Mew"}/>
        </div>
       </div>

    {/* o footer está chamando um componente footer que traz o nome do desenvolvedor */}
      <footer className=" h-1/6 flex flex-col bg-gradient-to-b from-purple-700 to-black justify-end">
      <Footer/>
      </footer>
     </main>
    
  )
}