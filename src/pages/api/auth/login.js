import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

// autenticador para a pagina de login
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    try {
      const user = await prisma.user.findUnique({
        where: { email },
      });

      if (!user) {
        return res.status(401).json({ message: 'Usuário não encontrado' });
      }

      const passwordValid = await bcrypt.compare(password, user.password);

      if (!passwordValid) {
        return res.status(401).json({ message: 'Senha inválida' });
      }

      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
        expiresIn: '1h',
      });

      return res.status(200).json({ token });
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      return res.status(500).json({ message: 'Erro interno do servidor' });
    }
  } else {
    return res.status(405).json({ message: 'Método não permitido' });
  }
}
