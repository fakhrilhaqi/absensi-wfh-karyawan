import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity('employees')
export class Employee {

    @PrimaryGeneratedColumn({
        type: 'bigint',
    })
    id: number;
    
    @Column()
    nip: string;

    @Column({name: 'full_name',})
    fullName: string;

    @Column()
    email: string;

    @Column({nullable: true})
    department: string;

    @Column({nullable: true})
    position: string;

    @CreateDateColumn({
        name: 'created_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
    })
    createdAt: Date;

    @UpdateDateColumn({
        name: 'updated_at',
    })
    updatedAt: Date;

}
