import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';

@Injectable()
export class TasksService {
  // It is good practice to declare variables or constants with a private prop
  // because it prevents other dependencies outside of this class from mutating it.
  private tasks: Task[] = [];

  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;
    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN
    };

    this.tasks.push(task);
    return task;
  }

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTasksWithFilter(filterDto: GetTasksFilterDto): Task[] {
    const { status, search } = filterDto;
    let tasks = this.getAllTasks();

    if (status) {
      tasks = tasks.filter((task) => task.status === status);
    }

    if (search) {
      tasks = tasks.filter((task) => {
        const _search =
          task.title.includes(search) || task.description.includes(search);
        return _search;
      });
    }

    return tasks;
  }

  getTaskById(id: string): Task {
    return this.tasks.find((task) => task.id === id);
  }

  updateStatusTask(id: string, status: TaskStatus): Task | string {
    const task = this.getTaskById(id);
    if (!task) return 'Task not found';
    task.status = status;
    return task;
  }

  deleteTaskById(id: string): string {
    const task = this.tasks.find((task) => task.id === id);
    if (!task) return 'Task not found';

    const taskIndex = this.tasks.indexOf(task);
    this.tasks.splice(taskIndex, 1);

    return `The task ${id} has been deleted`;
  }
}
