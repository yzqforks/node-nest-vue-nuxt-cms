import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  password: string;

  @Column({
    nullable: true,
  })
  avatar: string;

  @Column('simple-array', {
    nullable: true,
  })
  roles: string[];

  @Column('text', {
    nullable: true,
  })
  intro: string;

  @Column({ nullable: true })
  status: boolean;

  @Column({
    nullable: true,
    // select: false,
  })
  createdAt: Date;

  @Column({ nullable: true })
  updatedAt: Date;
  department: any;
  phone: any;
  departmentName: any;
  departmentId: any;
  areaId: any;
}
