import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('product-categories')
export class ProductCategories {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  route: string;

  @Column('text', { nullable: true })
  description: string;

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
