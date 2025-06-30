import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    Index
} from "typeorm";

@Entity('contacts')
export class Contact {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Index()
    @Column({nullable: true})
    from_customer_id?: string;

    @Index()
    @Column({nullable: true})
    customer_id?: string;

    @Column()
    first_name?: string;

    @Column()
    last_name?: string;

    @Column()
    phone_number?: string;

    @Column()
    country_code?: string;

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;
}