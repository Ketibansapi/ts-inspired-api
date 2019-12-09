
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    console.log('Requested to get all the users lists...');
    next();
  }
};

export function logger(req, res, next) {
    console.log ('Request to get all the users...');
    next()
};