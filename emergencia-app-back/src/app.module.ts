import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PacienteModule } from 'paciente/paciente.module';
import { RecepcaoService } from './recepcao/recepcao.service';
import { RecepcaoModule } from 'recepcao/recepcao.module';
import { ListaPrioridadeAtendimentoService } from './lista-prioridade-atendimento/lista-prioridade-atendimento.service';
import { ListaPrioridadeAtendimentoModule } from 'lista-prioridade-atendimento/lista-prioridade-atendimento.module';

@Module({
  imports: [TypeOrmModule.forRoot(),
            PacienteModule,
            RecepcaoModule,
            ListaPrioridadeAtendimentoModule    
          ],
  controllers: [AppController],
  providers: [AppService, RecepcaoService, ListaPrioridadeAtendimentoService],
})
export class AppModule {}
