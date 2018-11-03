import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PacienteService } from './paciente/paciente.service';
import { PacienteController } from 'paciente/paciente.controller';
import { PacienteModule } from 'paciente/paciente.module';

@Module({
  imports: [TypeOrmModule.forRoot(),
            PacienteModule          
          ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
