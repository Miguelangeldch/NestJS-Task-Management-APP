import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './tasks/tasks.entity';
import { AuthModule } from './auth/auth.module';
import { User } from './auth/user.entity';
import { ENTITIES_PATH } from './constants';

@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'task-management',
      entities: [ENTITIES_PATH],
      autoLoadEntities: true,
      synchronize: true
    }),
    AuthModule
  ]
})
export class AppModule {}
