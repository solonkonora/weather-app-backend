import { Controller, Get, Param, Patch, Body, UseGuards } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { UpdatePasswordDto } from '../users/dto/update-password.dto'; 

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // Update user password
  @Patch(':id/password')
  async updatePassword(
    @Param('id') id: string, 
    @Body() updatePasswordDto: UpdatePasswordDto
  ) {
    return this.usersService.updatePassword(id, updatePasswordDto);
  }
}
