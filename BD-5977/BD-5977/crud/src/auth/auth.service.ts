// auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { Register } from './user/user.entity'; 
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Register)
    private userRepo: Repository<Register>,
    private jwtService: JwtService,
  ) {}

  
  async register(data: RegisterDto) {
    // const user = this.userRepo.create(data);
     const hashedPassword = await bcrypt.hash(data.password, 10);

  const user = this.userRepo.create({
    email: data.email,
    password: hashedPassword,
  });
    return this.userRepo.save(user);
  }

  
//   async login(data: LoginDto) {
//     const user = await this.userRepo.findOne({
//       where: { email: data.email },
//     });

//     if (!user || user.password !== data.password) {
//       throw new Error('Invalid credentials');
//     }

//     const payload = {
//       userId: user.id,
//       email: user.email,
//     };

//     return {
//       access_token: this.jwtService.sign(payload),
//     };
//   }

  async login(data: LoginDto) {
  const user = await this.userRepo.findOne({
    where: { email: data.email },
  });

  if (!user) {
    throw new Error('Invalid credentials');
  }

  const isPasswordMatch = await bcrypt.compare(
    data.password,
    user.password,
  );

  if (!isPasswordMatch) {
    throw new Error('Invalid credentials');
  }

  const payload = {
    userId: user.id,
    email: user.email,
  };

  return {
    access_token: this.jwtService.sign(payload),
  };
}

}
