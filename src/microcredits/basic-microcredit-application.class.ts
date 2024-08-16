import { MicrocreditApplication } from './microcredit-application.class';

export class BasicMicrocreditApplication extends MicrocreditApplication {
  apply(): void {
    console.log(
      `Aplicando para microcrédito básico de ${this.amount} con usuario ${this.user.name}`,
    );
  }
}
