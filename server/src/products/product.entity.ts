import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  route: string;

  @Column({ nullable: true })
  pic: string;

  @Column({ nullable: true })
  category: string;

  @Column('text', { nullable: true })
  intro: string;

  @Column('text')
  content: string;

  @Column({
    default: false,
  })
  recommend: boolean;

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
