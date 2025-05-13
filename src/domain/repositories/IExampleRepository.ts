import { ExampleEntity } from '../entities/ExampleEntity';

export interface IExampleRepository {
  getExampleData(): Promise<ExampleEntity>;
}