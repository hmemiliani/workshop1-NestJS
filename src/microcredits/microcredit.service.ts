import { Injectable } from '@nestjs/common';
import {
  BasicMicrocreditApplication,
  PremiumMicrocreditApplication,
  MicrocreditApplication,
} from './microcredit-application.class';
import { User } from '../entities/user.entity';

@Injectable()
export class MicrocreditsService {
  processApplication(application: MicrocreditApplication) {
    if (application.validateApplication()) {
      application.apply();
    } else {
      console.log('Aplicación no válida');
    }
  }

  simulateBasicApplication() {
    // Crear una instancia de User correctamente
    const sampleUser = new User(123, 'John Doe', 650, []);
    const basicApp = new BasicMicrocreditApplication(sampleUser, 5000);
    this.processApplication(basicApp);
  }

  simulatePremiumApplication() {
    // Crear otra instancia de User correctamente
    const sampleUser = new User(124, 'Jane Doe', 750, []);
    const premiumApp = new PremiumMicrocreditApplication(sampleUser, 10000);
    this.processApplication(premiumApp);
  }
}
