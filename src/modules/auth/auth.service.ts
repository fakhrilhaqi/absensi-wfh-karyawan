import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm/repository/Repository.js';
import { LoginDto } from './dto/login.dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    
    constructor(
        @InjectRepository(User) 
        private readonly userRepository: Repository<User>,
        private jwtService: JwtService,

    ) {}
    
    async login(loginDto: LoginDto) {
        const user = await this.userRepository.findOne({
            where: {
                username: loginDto.username
            }
        });

        if (!user) {
            throw new UnauthorizedException('invalid username or password');
        }

        if (user.password !== loginDto.password) {
            throw new UnauthorizedException('invalid username or password');
        }

        const payload = { username: user.username, sub: user.id , role: user.role};

        return {
           access_token: this.jwtService.sign(payload),
        };
    }

}
