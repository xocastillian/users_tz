import { Module } from '@nestjs/common'
import { UsersModule } from './users/users.module'
import { PrismaService } from './db/prisma.service'

@Module({
  imports: [UsersModule],
})
export class AppModule {}
