import { Module } from '@nestjs/common';
import { UsersService } from './users.service';

@Module({
  providers: [UsersService],
  // allow a service from one module to be used in another module
  exports: [UsersService]
})
export class UsersModule {}
