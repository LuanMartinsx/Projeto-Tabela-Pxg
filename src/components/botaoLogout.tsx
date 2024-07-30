import React from 'react';
import { useAuth } from '../components/AuthContext'; 

const LogoutButton: React.FC = () => {
  const { logout } = useAuth();

// componente logout
  const handleLogout = () => {
    logout();
    // Redirecionar para a página inicial ou de login
    window.location.href = '/login'; // Ajuste o caminho conforme necessário
  };

  return (
    <div className='flex flex-col border border-purple-600 bg-purple-500 p-4 rounded-xl text-center text-xl'>
        <button onClick={handleLogout} className="logout-button">
      Logout
    </button>

    </div>
  );
}

export default LogoutButton;
