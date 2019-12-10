
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerGetUsers implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    console.log('[API Logger Middleware] Request: Get all the users lists, status: [200]');
    next();
  }
};

export class LoggerGetUserById implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    console.log('[API Logger Middleware] Request: Get user find by ID, status: [200]');
    next();
  }
};