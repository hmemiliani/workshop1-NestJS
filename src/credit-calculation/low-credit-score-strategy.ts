import { InterestRateStrategy } from './interest-rate-strategy.interface';
import { User } from '../entities/user.entity';

export class LowCreditScoreStrategy implements InterestRateStrategy {
  calculate(user: User): number {
    return user.creditScore <= 700 ? 10 : 8;
  }
}
