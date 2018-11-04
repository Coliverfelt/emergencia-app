import { Injectable, NestMiddleware, MiddlewareFunction } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  resolve(...args: any[]): MiddlewareFunction {
    return (req, res, next) => {
        // list os domains
        res.header('Access-Control-Allow-Origin', '*');
        // list of methods (e.g GET,HEAD,PUT,PATCH,POST,DELETE)
        res.header('Access-Control-Allow-Methods', '*');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        next();
    };
  }
}