import { Request, Response } from 'express';
import { GetExampleUseCase } from '../../usecases/GetExampleUseCase';

export const getExample = async (req: Request, res: Response) => {
  const result = await GetExampleUseCase.execute();
  res.json({ data: result });
};