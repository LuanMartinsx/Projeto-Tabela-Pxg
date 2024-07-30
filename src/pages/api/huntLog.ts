import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../prisma/lib/prisma';
import { authenticateToken } from '@/lib/middleware';


// api responsavel por carregar a tabela de huntlog do banco de dados
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  const { id } = req.query;

  switch (method) {
    case 'GET':
      authenticateToken(req, res, async () => {
        try {
          const userId = (req as any).userId;
          const tabela = await prisma.huntLog.findMany({
            where: { userId: userId }, // Filtra por userId, aqui no caso eu não queria que carregasse a tabela inteira, somente carregasse as informações do usuario logado entao fiz a validação usando o token para que selecionasse baseado no userID logado
          });
          res.status(200).json({ tabela });
        } catch (error) {
          console.error('Erro ao buscar os dados:', error);
          res.status(500).json({ error: 'Erro ao buscar os dados' });
        }
      });
      break;
      
    case 'DELETE':
      authenticateToken(req, res, async () => {
        try {
          const userId = (req as any).userId;
          await prisma.huntLog.deleteMany({
            where: {
              id: Number(id),
              userId: userId, // Filtra por userId e exclui o dado que o usuario quiser
            },
          });
          res.status(200).json({ message: 'Entry deleted' });
        } catch (error) {
          console.error('Erro ao deletar os dados:', error);
          res.status(500).json({ error: 'Erro ao deletar os dados' });
        }
      });
      break;

    default:
      res.setHeader('Allow', ['GET', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
