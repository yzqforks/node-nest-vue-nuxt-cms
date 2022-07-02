import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('home')
export class Home {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  pic: string;

  @Column('text', { nullable: true })
  intro: string;

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
