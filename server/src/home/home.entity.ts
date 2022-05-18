import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('home')
export class Home {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  pic: string;

  @Column('text', { nullable: true })
  intro: string;

  @Column()
  status: boolean;

  @Column({
    select: false,
    nullable: true,
  })
  createdAt: Date;

  @Column({ nullable: true })
  updatedAt: Date;
}
