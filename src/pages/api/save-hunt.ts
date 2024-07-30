import { NextApiRequest, NextApiResponse } from 'next';
import {prisma} from '../../../prisma/lib/prisma';

// api responsavel por salvar os dados do usuario na tabela do banco de dados, já salvando seu ID baseado em quem estiver logado

const saveHuntData = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const { id, hunt_id, hunt_name, total_lucro, data, userId } = req.body;
  
      if (!userId) {
        return res.status(400).json({ message: 'userId é necessário' });
      }
      // salva os dados da tabela no banco de dados
      const huntLog = await prisma.huntLog.create({
        data: {
          hunt_id,
          hunt_name,
          total_lucro,
          data: new Date(data),
          user: {
            connect: { id: userId }, // Conecte o usuário pelo ID
          },
        },
      });
  
      return res.status(200).json(huntLog);
    } catch (error) {
      console.error('Erro ao salvar os dados:', error);
      return res.status(500).json({ message: 'Erro ao salvar os dados' });
    }
  };
  
  export default saveHuntData;

