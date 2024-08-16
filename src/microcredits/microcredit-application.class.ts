import { User } from '../entities/user.entity';

export abstract class MicrocreditApplication {
  constructor(
    protected user: User,
    protected amount: number,
  ) {}

  abstract apply(): void;

  validateApplication(): boolean {
    return this.user.creditScore > 500;
  }
}

export class BasicMicrocreditApplication extends MicrocreditApplication {
  apply(): void {
    console.log(
      `Aplicando para microcrédito básico de ${this.amount} con usuario ${this.user.name}`,
    );
  }
}

export class PremiumMicrocreditApplication extends MicrocreditApplication {
  apply(): void {
    console.log(
      `Aplicando para microcrédito premium de ${this.amount} con usuario ${this.user.name}`,
    );
  }

  validateApplication(): boolean {
    return super.validateApplication() && this.user.creditScore > 700;
  }
}
