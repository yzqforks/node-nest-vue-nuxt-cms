import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  route: string;

  @Column()
  pic: string;

  @Column()
  category: string;

  @Column('text', { nullable: true })
  intro: string;

  @Column('text')
  content: string;

  @Column({
    default: false,
  })
  recommend: boolean;

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
