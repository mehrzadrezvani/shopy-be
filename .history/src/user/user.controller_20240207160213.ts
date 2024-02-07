import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { GetUserParams } from './dto/dto/user.dto';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(JwtGuard)
  @Get(':id')
  async getUserProfile(@Param('id') id: number) {
    return await this.userService.findById(id);
  }

  @Get('')
  async getUsers(@Query('searchString') searchParams: GetUserParams) {
    return await this.userService.users();
  }
}
