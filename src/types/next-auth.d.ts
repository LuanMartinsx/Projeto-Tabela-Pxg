import { User as PrismaUser } from '@prisma/client';

declare module 'next' {
  interface NextApiRequest {
    user?: PrismaUser;
  }
}