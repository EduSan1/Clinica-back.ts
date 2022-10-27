import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class PatientORM {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 500 })
    name: string

    @Column({ length: 10 })
    telephone: string

    @Column({ length: 11 })
    phone: string

    @Column({ length: 100 })
    mail: string

    @Column({ length: 500, nullable: true })
    responsibleName: string

    @Column(({ length: 10, nullable: true }))
    responsiblePhone: string

}
