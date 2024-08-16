import { InterestRateStrategy } from './interest-rate-strategy.interface';
import { User } from '../entities/user.entity';

export class HighCreditScoreStrategy implements InterestRateStrategy {
  calculate(user: User): number {
    return user.creditScore > 700 ? 4 : 6;
  }
}
