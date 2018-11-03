import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PacienteService } from './paciente/paciente.service';
import { PacienteController } from 'paciente/paciente.controller';
import { PacienteModule } from 'paciente/paciente.module';
import { RecepcaoService } from './recepcao/recepcao.service';
import { RecepcaoModule } from 'recepcao/recepcao.module';

@Module({
  imports: [TypeOrmModule.forRoot(),
            PacienteModule,
            RecepcaoModule          
          ],
  controllers: [AppController],
  providers: [AppService, RecepcaoService],
})
export class AppModule {}
