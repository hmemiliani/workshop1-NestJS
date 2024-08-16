import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreditCalculationService } from './credit-calculation/credit-calculation.service';
import { MicrocreditRegistryService } from './microcredits/microcredit-registry.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MicrocreditsService } from './microcredits/microcredit.service';
import { MicrocreditsModule } from './microcredits/microcredits.module';

@Module({
  imports: [
    MicrocreditsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '', //poner la contraseña.
      database: 'MicrocreditsDb',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false, // desactivar esto en producción
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    CreditCalculationService,
    MicrocreditRegistryService,
    MicrocreditsService,
  ],
})
export class AppModule {}
