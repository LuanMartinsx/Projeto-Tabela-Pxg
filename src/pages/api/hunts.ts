import type { NextApiRequest, NextApiResponse } from 'next'
import db from '../../BancoSql/config/db'

// api responsavel por carregar a tabela de hunts do banco de dados 
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const hunts = await new Promise((resolve, reject) => {
        db.query("SELECT * FROM hunt", (err: any, hunts: []) => {
            if (err) {
                reject(err);
            } else {
                resolve(hunts);
            }
        });
    });
    res.status(200).json({hunts})
  } else {
    // Handle any other HTTP method
  }

}