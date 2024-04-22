// auth.service.ts
import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AythService {
  private readonly JWT_SECRET = process.env.PRIVATE_JWT;

  decodeToken(token: string): any {
    try {
      const decoded = jwt.verify(token, this.JWT_SECRET);
      return decoded;
    } catch (err) {
      return null;
    }
  }
}