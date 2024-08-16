import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { InterestRateStrategy } from './interest-rate-strategy.interface';
import { HighCreditScoreStrategy } from './high-credit-score-strategy';

@Injectable()
export class CreditCalculationService {
  private strategy: InterestRateStrategy;

  constructor() {
    // Inicializar con una estrategia por defecto
    this.strategy = new HighCreditScoreStrategy();
  }

  setStrategy(strategy: InterestRateStrategy) {
    this.strategy = strategy;
  }

  calculateInterestRate(user: User): number {
    return this.strategy.calculate(user);
  }
}
