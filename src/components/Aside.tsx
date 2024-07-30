interface AsideProps {
    buttonPokemon?: React.ReactNode;
    buttonConquistas?: React.ReactNode;
    buttonFarm?: React.ReactNode;
    buttonBack?: React.ReactNode;
  }
  
  // Componente Aside do lado esquerdo
  export default function Aside(props: AsideProps) {
    return (
      <aside className="bg-purple-700 pt-12 p-6 flex flex-col gap-20 h-full">
        <div className="border border-purple-600 bg-purple-500 p-4 rounded-xl text-center text-xl">{props.buttonPokemon}</div>
        <div className="border border-purple-600 bg-purple-500 p-4 rounded-xl text-center text-xl">{props.buttonConquistas}</div>
        <div className="border border-purple-600 bg-purple-500 p-4 rounded-xl text-center text-xl">{props.buttonFarm}</div>
        <div className="border border-purple-600 bg-purple-500 p-4 rounded-xl text-center text-xl">{props.buttonBack}</div>
      </aside>
    );
  }
  