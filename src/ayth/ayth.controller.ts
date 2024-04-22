// auth.controller.ts
import { Controller, Get, Headers } from '@nestjs/common';
import { AythService } from './ayth.service';

@Controller('profile')
export class AythController {
  constructor(private readonly authService: AythService) {}

  @Get()
  getProfile(@Headers('authorization') authorization: string) {
    const token = authorization.replace('Bearer ', '');
    const decodedToken = this.authService.decodeToken(token);

    if (decodedToken) {
      return { userId: decodedToken.id };
    } else {
      return { message: 'Invalid token' };
    }
  }
}