import { Repository } from 'typeorm';
import { Task } from './tasks.entity';

export class TasksRepository extends Repository<Task> {}
