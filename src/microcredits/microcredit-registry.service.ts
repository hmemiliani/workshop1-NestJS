import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Microcredit } from '../entities/microcredit.entity';
import { MicrocreditRepository } from './repositories/microcredit.repository';

@Injectable()
export class MicrocreditRegistryService {
  constructor(
    @InjectRepository(MicrocreditRepository)
    private microcreditRepository: MicrocreditRepository,
  ) {}

  async saveMicrocredit(microcredit: Microcredit): Promise<void> {
    await this.microcreditRepository.save(microcredit);
  }
}
