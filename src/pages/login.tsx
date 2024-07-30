import Imagem from "@/components/Imagem";
import { useRouter } from "next/router";
import { useState } from "react";
import { useAuth } from "../components/AuthContext";
import Footer from "@/components/Footer";

const Login = () => {
  const router = useRouter(); // funcão para utilizar navegação no next no caso com ela é possivel navegar entre as paginas 
  const [email, setEmail] = useState(""); // estado para o campo email
  const [password, setPassword] = useState(""); // estado para o campo password, ambos começam como uma string vazia e esperam o usuario digitar o valor
  const { login } = useAuth(); // seta a constante login como uma função do autenticador

  // função responsavel por habilitar a tecla enter como uma forma de login
  const handleKeyPress = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter')
      handleLogin()
  }

  const handleLogin = async () => {
    try {
      // faz uma requisição do tipo post para a api login com os dados email e password que o usuario digitou
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        login(data.token); // Chama a função de login do contexto de autenticação
        router.push('/mainPage'); // Redireciona para a página principal após o login
      } else {
        const errorData = await response.json();
        alert(`Login falhou: ${errorData.message}`); // Exibe uma mensagem de erro
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error); // Log do erro
      alert('Erro ao fazer login'); // Exibe uma mensagem de erro
    }
  };

  return (
    <main className="flex flex-col h-screen w-screen bg-gradient-to-t from-purple-700 to-black z-10">
      {/* Cabeçalho */}
      <header className="bg-gradient-r from-purple-700 to-black h-32 p-6 flex flex-row gap-48">
        <div className="w-1/6 flex flex-row gap-4 justify-start">
          <Imagem src="/img/Psychic.png" width={48} height={48} alt={"Psychic"} />
          <Imagem src="/img/Fairy.png" width={48} height={48} alt={"Fairy"} />
        </div>
        <h1 className="text-6xl text-start w-5/6 pt-3">Programa de Conquistas do PXG!</h1>
      </header>
      {/* Main */}
      <div className="h-3/4 flex flex-row justify-center gap-32 items-center">
        <div>
          {/* Imagem da Sylveon */}
          <Imagem src="/img/Sylveon.png" width={360} height={370} alt={"Sylveon"} />
        </div>
        <div>
          <div>
            <h2 className="text-3xl text-white">E-mail</h2>
            {/* Imput referente ao campo de E-mail */}
            <input 
              type="email" 
              className="text-black text-3xl p-2 rounded" 
              value={email} // o valor do campo imput será o valor do estado email
              onChange={(e) => setEmail(e.target.value)} // pega o valor que foi digitado no campo email e seta para o state email
              placeholder="Digite seu e-mail"
            />
          </div>
          <div className="mt-4">
            <h2 className="text-3xl text-white">Senha</h2>
             {/* Imput referente ao campo de Password */}
            <input 
              type="password" 
              className="text-black text-3xl p-2 rounded mb-5" 
              value={password} // o valor do campo imput será o valor do estado password
              onChange={(e) => setPassword(e.target.value)} // pega o valor que foi digitado no campo password e seta para o state password
              placeholder="Digite sua senha"
              onKeyDown ={handleKeyPress}
            />
          </div>
          <div className="flex justify-between">
            {/* botão responsavel por realizar a função de login */}
            <button 
              className="p-2 bg-purple-950 rounded border border-pink-700 hover:bg-pink-700" 
              onClick={handleLogin} 
            >
              Sign in
            </button>
            {/* botão responsavel por voltar para a pagina inicial */}
            <button 
              className="p-2 bg-purple-950 rounded border border-pink-700 hover:bg-pink-700" 
              onClick={() => { router.push('/') }}
            >
              Voltar
            </button>
          </div>
        </div>
        <div>
          {/* Imagem do Mew */}
          <Imagem src="/img/mew.png" width={360} height={370} alt={"Mew"} />
        </div>
      </div>
      {/* o footer está chamando um componente footer que traz o nome do desenvolvedor */}
      <footer className="h-1/6 flex flex-col bg-gradient-to-b from-purple-700 to-black justify-end">
      <Footer/>
      </footer>
    </main>
  );
}

export default Login;
