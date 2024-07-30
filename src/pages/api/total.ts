import db from "@/BancoSql/config/db";
import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || '';
// Api responsavel por buscar cada um dos dados do usuario que estiver logado e somar seus dados na tabela
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      // Verificar o token
      const token = req.headers.authorization?.split(' ')[1];
      if (!token) {
        return res.status(401).json({ error: 'Token não fornecido' });
      }

      const decoded = jwt.verify(token, JWT_SECRET) as { userId: number }; // usei o jsonwebtoken para fazer a validação e conseguir que o userId esteja presente em todas as partes da aplicação para que o programa possa localiza-lo e realizar as buscas somente para o ID logado
      const userId = decoded.userId;

      // Consultar o total baseado no userId
      const total = await new Promise((resolve, reject) => {
        db.query(
          `SELECT SUM(total_lucro) as total_lucro FROM huntlog WHERE userId = ?`,
          [userId],
          (err: any, results: unknown[]) => {
            if (err) {
              reject(err);
            } else {
              resolve(results[0]);
            }
          }
        );
      });

      res.status(200).json({ total });
    } catch (error) {
      console.error('Erro ao verificar o token ou buscar os dados:', error);
      res.status(500).json({ error: 'Erro ao buscar os dados de total' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Método ${req.method} não permitido`);
  }
}
