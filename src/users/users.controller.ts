import { Controller, Get, Param, Patch, Body, UseGuards } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UpdatePasswordDto } from '../users/dto/update-password.dto'; 

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // Get user details by ID
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getUser(@Param('id') id: string) {
    return this.usersService.findById(id);
  }

  // Update user password
  @UseGuards(JwtAuthGuard)
  @Patch(':id/password')
  async updatePassword(
    @Param('id') id: string, 
    @Body() updatePasswordDto: UpdatePasswordDto
  ) {
    return this.usersService.updatePassword(id, updatePasswordDto);
  }
}
