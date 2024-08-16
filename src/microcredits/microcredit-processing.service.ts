import { Injectable } from '@nestjs/common';
import {
  BasicMicrocreditApplication,
  PremiumMicrocreditApplication,
  MicrocreditApplication,
} from './microcredit-application.class';
import { User } from '../entities/user.entity'; // Asegúrate de que la ruta de importación es correcta

@Injectable()
export class MicrocreditProcessingService {
  processApplication(application: MicrocreditApplication) {
    if (application.validateApplication()) {
      application.apply();
    } else {
      console.log('Aplicación no válida');
    }
  }

  processAllApplications() {
    const userJohn = new User(1, 'John Doe', 650, []);
    const userJane = new User(2, 'Jane Doe', 750, []);

    const basicApp = new BasicMicrocreditApplication(userJohn, 5000);
    const premiumApp = new PremiumMicrocreditApplication(userJane, 10000);

    this.processApplication(basicApp);
    this.processApplication(premiumApp);
  }
}
