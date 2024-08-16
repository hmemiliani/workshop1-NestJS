import { User } from 'src/entities/user.entity';

export interface InterestRateStrategy {
  calculate(user: User): number;
}
