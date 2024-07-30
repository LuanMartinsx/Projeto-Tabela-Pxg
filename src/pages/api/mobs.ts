import type { NextApiRequest, NextApiResponse } from 'next'
import db from '../../BancoSql/config/db'
 

// api responsavel por carregar a tabela de monstros do banco de dados
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const mobs = await new Promise((resolve, reject) => {
        db.query("SELECT * FROM monstro;", (err: any, mobs: []) => {
            if (err) {
                reject(err);
            } else {
                resolve(mobs);
            }
        });
    });
    res.status(200).json({mobs})
  } else {
    // Handle any other HTTP method
  }

}