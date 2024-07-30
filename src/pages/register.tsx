import Footer from "@/components/Footer";
import Imagem from "@/components/Imagem";
import { useRouter } from "next/router";
import { useState } from "react";

const Register = () => {
  const router = useRouter(); // funcão para utilizar navegação no next no caso com ela é possivel navegar entre as paginas 
  const [username, setUsername] = useState(""); // estado para o campo UserName
  const [email, setEmail] = useState(""); // estado para o campo email
  const [password, setPassword] = useState(""); // estado para o campo Password
  const [confirmPassword, setConfirmPassword] = useState(""); // estado para o campo ComfirmPassword


 // função responsavel por habilitar a tecla enter como uma forma de registro
  const handleKeyPress = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter')
      handleRegister()
  }

  // função para verificar se os dois campos password e confirmpassword coincidem no caso de não coincidir irá retornar o alert
  const handleRegister = async () => {
    if (password !== confirmPassword) {
      alert('As senhas não coincidem');
      return;
    }

    try {
     // faz uma requisição do tipo post para a api register com os dados que o usuario digitou para realizar o registro
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (response.ok) {
        router.push('/login'); // Redirecionar para a página de login após o registro
      } else {
        alert('Registro falhou');
      }
    } catch (error) {
      console.error('Erro ao registrar:', error);
    }
  };

  return (
    <main className="flex flex-col h-screen w-screen bg-gradient-to-t from-purple-700 to-black z-10">
      <header className="bg-gradient-r from-purple-700 to-black h-32 p-6 flex flex-row gap-48">
        <div className="w-1/6 flex flex-row gap-4 justify-start">
          <Imagem src="/img/Psychic.png" width={48} height={48} alt={"Psychic"} />
          <Imagem src="/img/Fairy.png" width={48} height={48} alt={"Psychic"} />
        </div>
        <h1 className="text-6xl text-start w-5/6 pt-3">Programa de Conquistas do PXG!</h1>
      </header>
      <div className="h-3/4 flex flex-row justify-center gap-32 items-center">
        <div>
          {/* Imagem da Sylveon */}
          <Imagem src="/img/Sylveon.png" width={360} height={370} alt={"gengar"} />
        </div>
        <div>
          <div>
            <h2>Digite seu Usuário</h2>
            <input 
              type="text" 
              className="text-black text-3xl" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} // evento responsavel por pegar o valor digitado e colocar no estado respectivo
            />
          </div>
          <div>
            <h2>Digite seu E-mail</h2>
            <input 
              type="email" 
              className="text-black text-3xl" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} // evento responsavel por pegar o valor digitado e colocar no estado respectivo
            />
          </div>
          <div>
            <h2>Digite sua Senha</h2>
            <input 
              type="password" 
              className="text-black text-3xl" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} // evento responsavel por pegar o valor digitado e colocar no estado respectivo
            />
          </div>
          <div>
            <h2>Confirme sua Senha</h2>
            <input 
              type="password" 
              className="text-black text-3xl mb-5" 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} // evento responsavel por pegar o valor digitado e colocar no estado respectivo
              onKeyDown={handleKeyPress} // evento para quando o usuario apertar a tecla chamar a função 
            />
          </div>
          <div className="flex flex-box justify-between">
            {/* botão para registro ao clicar chama a função responsavel por registar novos usuarios */}
            <button className="p-2 bg-purple-950 rounded border border-pink-700 hover:bg-pink-700" onClick={handleRegister}>
              Register
            </button>
            {/* botão para voltar para a pagina inicial */}
            <button className="p-2 bg-purple-950 rounded border border-pink-700 hover:bg-pink-700" onClick={() => { router.push('/') }}>
              Voltar
            </button>
          </div>
        </div>
        <div>
          {/* Imagem do Mew */}
          <Imagem src="/img/mew.png" width={360} height={370} alt={"gengar"} />
        </div>
      </div>

      {/* o footer está chamando um componente footer que traz o nome do desenvolvedor */}
      <footer className=" h-1/6 flex flex-col bg-gradient-to-b from-purple-700 to-black justify-end">
      <Footer/>
      </footer>
    </main>
  )
}

export default Register;
