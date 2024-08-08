import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  Patch,
} from '@nestjs/common'
import { UsersService } from './users.service'
import { Prisma } from '@prisma/client'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.usersService.findOne(+id)
  }

  @Post()
  create(@Body() createUserDto: Prisma.UserCreateInput) {
    return this.usersService.create(createUserDto)
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateUserDto: Prisma.UserUpdateInput,
  ) {
    return this.usersService.update(+id, updateUserDto)
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.usersService.delete(+id)
  }
}
