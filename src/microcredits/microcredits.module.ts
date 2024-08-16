import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MicrocreditRegistryService } from './microcredit-registry.service';
import { MicrocreditRepository } from './repositories/microcredit.repository';

@Module({
  imports: [TypeOrmModule.forFeature([MicrocreditRepository])],
  providers: [MicrocreditRegistryService],
  exports: [MicrocreditRegistryService],
})
export class MicrocreditsModule {}
