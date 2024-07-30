import db from "@/BancoSql/config/db";
import { NextApiRequest, NextApiResponse } from "next";


// api responsavel por carregar a tabela de itens do banco de dados
export default async function handlerItens(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const itens = await new Promise((resolve, reject) => {
        db.query(
          `SELECT
            m.id AS monstros_id,
            m.nome AS monstros_nome,
            i.id AS item_id,
            i.nome AS item_nome,
            i.preco AS item_preco,
            mh.hunt_id AS hunt_id
          FROM
            monstro m
          JOIN
            monstroItem mi ON m.id = mi.monstro_id
          JOIN
            item i ON mi.item_id = i.id
          JOIN
            monstroHunt mh ON m.id = mh.monstro_id;`,
          (err: any, itens: []) => {
            if (err) {
              reject(err);
            } else {
              resolve(itens);
            }
          }
        );
      });
      res.status(200).json({ itens });
    } catch (error) {
      console.error('Erro ao buscar os dados de itens:', error);
      res.status(500).json({ error: 'Erro ao buscar os dados de itens.' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Método ${req.method} não permitido`);
  }
}