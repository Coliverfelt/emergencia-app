import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PacienteModule } from 'paciente/paciente.module';
import { ListaPrioridadeAtendimentoService } from './lista-prioridade-atendimento/lista-prioridade-atendimento.service';
import { ListaPrioridadeAtendimentoModule } from 'lista-prioridade-atendimento/lista-prioridade-atendimento.module';
import { LoggerMiddleware } from 'logger.middleware';
import { PacienteController } from 'paciente/paciente.controller';
import * as cors from 'cors';

@Module({
  imports: [TypeOrmModule.forRoot(),
            PacienteModule,
            ListaPrioridadeAtendimentoModule    
          ],
  controllers: [AppController],
  providers: [AppService, ListaPrioridadeAtendimentoService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(cors(), LoggerMiddleware)
    .forRoutes(PacienteController)
  }
}
