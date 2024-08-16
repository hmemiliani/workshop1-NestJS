import { MicrocreditApplication } from './microcredit-application.class';

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
