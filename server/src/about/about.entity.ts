import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('about')
export class About {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  route: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  category: string;

  @Column({ nullable: true })
  banner: string;

  @Column('text', { nullable: true })
  content: string;

  @Column({ nullable: true })
  status: boolean;

  @Column({
    select: false,
    nullable: true,
  })
  createdAt: Date;

  @Column({ nullable: true })
  updatedAt: Date;
}
