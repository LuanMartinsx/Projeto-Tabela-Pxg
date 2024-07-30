import Aside from "./Aside";
import Header from "./Header";
import Footer from "./Footer";
import AsideRight from "./AsideRighit";
import { ReactNode } from "react";
import Navegador from "./Navegador";
import Imagem from "./Imagem";
import LogoutButton from "./botaoLogout";

interface LayoutProps {
  titulo?: string;
  children?: ReactNode;
}


// componente layout base, futuramente pode ter alterações
export default function Layout(props: LayoutProps) {
  return (
    <>
    <div className="flex flex-col h-screen">
      <Header img={<Imagem src={"/img/icon.jpg"} width={150} height={150} alt={"Psycraft"} />} tituloHeader={props.titulo} />
      <div className="flex flex-1">
        <Aside
          buttonPokemon={<Navegador destino='/Perfil' texto="Pokemons" />}
          buttonConquistas={<Navegador destino="/Conquistas" texto="Conquistas" />}
          buttonFarm={<Navegador destino='/Farm' texto="Tabela de Farm" />}
          buttonBack={<Navegador destino='/' texto="Voltar" />}
        />
        <main className="flex-1 p-4 overflow-auto">
          {props.children}
        </main>
        <AsideRight />
      </div>
      
    </div>
    <footer className="h-8 flex flex-col bg-gradient-to-b from-purple-700 to-black justify-center">
    <Footer />
    </footer>
    </>
  )
}
