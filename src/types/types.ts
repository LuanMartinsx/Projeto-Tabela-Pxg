import { NextApiRequest } from 'next';

export interface AuthenticatedRequest extends NextApiRequest {
  userId?: number;
}

export interface JwtPayload {
    userId: number;
    // Outros campos se houver
  }