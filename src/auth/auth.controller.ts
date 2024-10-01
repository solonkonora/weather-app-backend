import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { SignupDto } from './dto/signup.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // @Post('/signup')
  // signup(@Body() signUpDto: SignupDto): Promise<{ token: string }> {
  //   return this.authService.signUp(signUpDto);
  // }

  @Post('/signup')
  signup(@Body() signupDto: SignupDto): Promise<any> {
    return this.authService.signUp(signupDto);
  }

  @Post('/login')
  login(@Body() loginDto: LoginDto): Promise<{ token: string }> {
    return this.authService.login(loginDto);
  }
}
