import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateTodoDto } from './create-todo.dto';
import { Todo } from './shared/todo.model';
import { UpdateTodoDto } from './update-todo.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  //* C
  @Post('todo')
  addTodo(@Body() createTodoDto: CreateTodoDto) {
    const { text } = createTodoDto;
    return this.appService.addTodo(text);
  }

  //* R
  @Get('todos')
  getAllTodo() {
    return this.appService.getAllTodo();
  }

  //* P
  @Patch('todo/:id')
  updateTodo(
    @Param() params: { id: string },
    @Body() updateTodoDto: UpdateTodoDto,
  ) {
    const { id } = params;
    const { text, done } = updateTodoDto;
    const todo: Todo = {
      id: Number(id),
      text,
      done,
    };
    return this.appService.updateTodo(Number(id), todo);
  }

  //* D
  @Delete('todo/:id')
  deleteTodo(@Param() params: { id: string }) {
    const { id } = params;
    return this.appService.deleteTodo(Number(id));
  }
}
