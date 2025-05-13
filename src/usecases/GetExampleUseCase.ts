import { ExampleRepository } from '../adapters/repositories/ExampleRepository';

export const GetExampleUseCase = {
  async execute() {
    return await ExampleRepository.getExampleData();
  }
};