import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


// api dinamica para buscar o ID da hunt 
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { huntId } = req.query;

  try {
    if (!huntId) {
      res.status(400).json({ error: 'huntId é necessário' });
      return;
    }

    const parsedHuntId = parseInt(huntId as string);
    if (isNaN(parsedHuntId)) {
      res.status(400).json({ error: 'huntId inválido' });
      return;
    }

    console.log('Buscando monstros para a hunt com ID:', parsedHuntId);

    const monstrosHunts = await prisma.monstroHunt.findMany({
      where: { hunt_id: parsedHuntId },
      include: { Monstro: true },
    });

    if (monstrosHunts.length === 0) {
      res.status(404).json({ error: 'Nenhum monstro encontrado para a hunt.' });
      return;
    }

    const monstros = monstrosHunts.map(mh => mh.Monstro);

    res.status(200).json({ monstros });
  } catch (error) {
    console.error('Erro ao buscar monstros para a hunt:', error);
    res.status(500).json({ error: 'Erro ao buscar monstros para a hunt.' });
  }
}