import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn, } from "typeorm";
import { Employee } from "../../employees/entities/employee.entity";

@Entity('attendance' )
export class Attendance {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'employee_id', type: 'bigint' })
  employeeId: number;

  @ManyToOne(() => Employee)
  @JoinColumn({ name: 'employee_id' })
  employee: Employee;

  @Column({
    name: 'attendance_datetime',
    type: 'datetime',
  })
  attendanceDatetime: Date;

  @Column()
  photo: string;

  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
  })
  updatedAt: Date;

}
