interface HeaderProps {
  img?: React.ReactNode;
  tituloHeader?: React.ReactNode;
}

export default function Header(props: HeaderProps) {
  return (
    <header className="flex items-center justify-between bg-gradient-to-r from-purple-700 to-zinc-900 p-4">
      <div className="flex-shrink-0">
        {props.img}
      </div>
      <h1 className="text-6xl text-white flex-1 text-center">
        {props.tituloHeader}
      </h1>
    </header>
  );
}
