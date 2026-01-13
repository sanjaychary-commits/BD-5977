import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class WebHook {
  @PrimaryColumn({ type: 'varchar', length: 40 })
  id: string;

  @Column({ name: 'tree_id', type: 'varchar', length: 40 })
  treeId: string;

  @Column({ type: 'boolean', default: false })
  distinct: boolean;

  @Column({ type: 'text' })
  message: string;

  @Column({ type: 'timestamptz' })
  timestamp: Date;

  @Column({ type: 'text' })
  url: string

  /**
   * GitHub author object
   * Example: { name, email, username }
   */
  @Column({ type: 'jsonb', nullable: true })
  author:object;

  /**
   * GitHub committer object
   * Example: { name, email, username }
   */
  @Column({ type: 'jsonb', nullable: true })
  committer: object;
}
