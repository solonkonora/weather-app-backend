import { Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';

import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { SignupDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async signUp(signUpDto: SignupDto): Promise<{ token: string }> {
    try {
      const { username, email, password } = signUpDto;
  
      const existingUser = await this.userModel.findOne({ email });
      if (existingUser) {
        throw new UnauthorizedException('User already exists with this email');
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const user = await this.userModel.create({
        username,
        email,
        password: hashedPassword,
      });
    
      const token = this.jwtService.sign({ id: user._id });
  
      return { token }; // Return token
    } catch (error) {
      console.error("Error during sign up:", error); // Log the error
      throw new InternalServerErrorException('Error during registration'); // Throw a more specific error if necessary
    }
  }

  async login(loginDto: LoginDto): Promise<{ token: string }> {
    // console.log('Login attempt with data:', loginDto); // Log the login attempt

    const { email, password } = loginDto;

    const user = await this.userModel.findOne({ email });

    if (!user) {
        throw new UnauthorizedException('Invalid email or password');
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password);

    if (!isPasswordMatched) {
        throw new UnauthorizedException('Invalid email or password');
    }

    const token = this.jwtService.sign({ id: user._id });

    return { token };
}
}
