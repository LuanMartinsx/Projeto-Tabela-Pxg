import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

interface DecodedToken {
  userId: number;
}

// token de autenticação
export const authenticateToken = (req: NextApiRequest, res: NextApiResponse, callback: () => void) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Extrai o token do header 'Authorization'

  if (token == null) return res.status(401).json({ error: 'Token não fornecido' });

  jwt.verify(token, process.env.JWT_SECRET as string, (err, decoded) => {
    if (err) return res.status(403).json({ error: 'Token inválido' });

    if (decoded && typeof decoded !== 'string' && 'userId' in decoded) {
      (req as any).userId = decoded.userId; // Adiciona o userId ao request
      callback(); // Chama o callback, que é a função do handler
    } else {
      res.status(403).json({ error: 'Token não contém userId' });
    }
  });
};
