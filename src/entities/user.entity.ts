import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  creditScore: number;

  @Column('simple-json')
  financialHistory: FinancialRecord[];

  constructor(
    id: number,
    name: string,
    creditScore: number,
    financialHistory: FinancialRecord[],
  ) {
    this.id = id;
    this.name = name;
    this.creditScore = creditScore;
    this.financialHistory = financialHistory;
  }
}

export interface FinancialRecord {
  date: Date;
  transactionType: string;
  amount: number;
}
