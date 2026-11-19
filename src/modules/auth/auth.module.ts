import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { User } from './entities/user.entity';
import { JwtStrategy } from './strategies/jwt.strategy/jwt.strategy';
import { PassportModule } from '@nestjs/passport';


@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule,
    JwtModule.register({
      secret: 'absensi-secret-key', // Replace
      signOptions: { expiresIn: '1d' }, // Token expiration time
    }),
    
  
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
