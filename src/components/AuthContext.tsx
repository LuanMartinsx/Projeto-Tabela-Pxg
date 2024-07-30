import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import jwt from 'jsonwebtoken';

interface DecodedToken {
  userId: number | null;
}

interface AuthContextType {
  userId: number | null;
  setUserId: (id: number | null) => void;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);
// componente de autenticação
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userId, setUserId] = useState<number | null>(null); // estado para pegar o id do usuario

  const decodeToken = (token: string): DecodedToken => {
    try {
      // `jsonwebtoken` decodifica o token sem verificar a assinatura
      const decoded = jwt.decode(token) as DecodedToken;
      return decoded;
    } catch (error) {
      console.error('Erro ao decodificar o token:', error);
      return { userId: null }; // Retorne um valor padrão ou nulo se ocorrer um erro
    }
  };

  // seta o id baseado no token do usuario logado
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = decodeToken(token);
      setUserId(decoded.userId);
    }
  }, []);

// seta o token baseado no id para fazer o login
  const login = (token: string) => {
    localStorage.setItem('token', token);
    const decoded = decodeToken(token);
    setUserId(decoded.userId);
  };

  // remove o token para fazer o logout
  const logout = () => {
    localStorage.removeItem('token');
    setUserId(null);
  };

  return (
    <AuthContext.Provider value={{ userId, setUserId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// const exportada para ser usada em outros componentes, para conseguir setar o id em todo o programa
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context
}
