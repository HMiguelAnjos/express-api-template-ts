import { ExampleEntity } from '../../domain/entities/ExampleEntity';
import { IExampleRepository } from '../../domain/repositories/IExampleRepository';

export const ExampleRepository: IExampleRepository = {
  async getExampleData() {
    return new ExampleEntity('Example data from repository');
  }
};