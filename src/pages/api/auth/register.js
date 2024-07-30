import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

// autenticador para a pagina de registro
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, email, password } = req.body;

    // Validar entradas
    if (!username || !email || !password) {
      return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
    }

    // Verificar se o usuário já existe
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(400).json({ message: 'E-mail já registrado' });
    }

    // Hash da senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // Criar novo usuário
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    return res.status(201).json({ message: 'Usuário registrado com sucesso' });
  } else {
    return res.status(405).json({ message: 'Método não permitido' });
  }
}