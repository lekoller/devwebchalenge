import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Account {
  @PrimaryGeneratedColumn('increment', { type: 'integer' })
  id: number;
  @Column({ type: 'varchar', length: 100, nullable: false })
  name: string;
  @Column({ type: 'varchar', length: 100, nullable: false, unique: true })
  email: string;
  @Column({ type: 'bigint', nullable: false, unique: true })
  phone: string;
  @Column({ type: 'varchar', length: 60, nullable: false })
  password: string;
  @Column({ type: 'bool', nullable: false })
  marketing: string;
}
