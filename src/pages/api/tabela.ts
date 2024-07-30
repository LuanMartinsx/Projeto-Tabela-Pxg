

// import type { NextApiRequest, NextApiResponse } from 'next';
// import { prisma } from '../../../prisma/lib/prisma'; // Ajuste o caminho conforme necessário

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const { method } = req;

//   switch (method) {
//     case 'GET':
//       try {
//         const tabela = await prisma.huntLog.findMany();
//         res.status(200).json({ tabela });
//       } catch (error) {
//         console.error('Erro ao buscar os dados:', error);
//         res.status(500).json({ error: 'Erro ao buscar os dados' });
//       }
//       break;
    
//     case 'PUT':
//       try {
//         const {id} = req.query
//         const { data, hunt_name, total_lucro } = req.body;
//         const updatedhunt_name = await prisma.huntLog.update({
//           where: { id: Number(id) },
//           data: {data, hunt_name, total_lucro },
//         });
//         res.status(200).json(updatedhunt_name);
//       } catch (error) {
//         console.error('Erro ao atualizar os dados:', error);
//         res.status(500).json({ error: 'Erro ao atualizar os dados' });
//       }
//       break;
    
//     case 'DELETE':
//       try {
//         const { id: deleteId } = req.query;
//         await prisma.huntLog.delete({
//           where: { id: Number(deleteId) },
//         });
//         res.status(200).json({ message: 'Entry deleted' });
//       } catch (error) {
//         console.error('Erro ao deletar os dados:', error);
//         res.status(500).json({ error: 'Erro ao deletar os dados' });
//       }
//       break;

//     default:
//       res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
//       res.status(405).end(`Method ${method} Not Allowed`);
//   }
// }

  