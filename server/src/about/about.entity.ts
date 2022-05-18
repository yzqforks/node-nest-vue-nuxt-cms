import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('about')
export class About {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  route: string;

  @Column()
  description: string;

  @Column()
  category: string;

  @Column()
  banner: string;

  @Column('text', { nullable: true })
  content: string;

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
