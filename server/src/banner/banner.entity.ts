import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('banner')
export class Banner {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  url: string;

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
