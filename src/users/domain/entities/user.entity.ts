import { Entity } from '@/shared/domain/entities/entity'

export type UserProps = {
    name: string
    email: string
    password: string
    CreateAt?: Date
}

export class UserEntity extends Entity<UserProps>{
    constructor(public readonly props: UserProps, id?: string) {
        super(props, id)
        this.props.CreateAt = this.props.CreateAt ?? new Date()
    }
    get name(): string {
        return this.props.name
    }

    private set name(value: string) {
        this.props.name = value
    }

    get email(): string {
        return this.props.email
    }

    get password(): string {
        return this.props.password
    }

    private set password(value: string) {
        this.props.password = value
    }

    get CreateAt(): Date {
        return this.props.CreateAt
    }

    update(value: string): void {
        this.name = value
    }

    updatePassword(value: string): void {
        this.password = value
    }
}