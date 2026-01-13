// users/user.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Register {
  @PrimaryGeneratedColumn()
  id: number;

  // @Column({ unique: true})
  @Column({ default: 'temporary@example.com' })
  email: string;

  @Column({ nullable: true })
  password: string;
}