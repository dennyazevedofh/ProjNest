import { Entity } from '@/shared/domain/entities/entity'
import { UserValidatorFactory } from '../validators/user.validator'
import { EntityValidationError } from '@/shared/domain/errors/validation-error'

export type UserProps = {
    name: string
    email: string
    password: string
    createdAt?: Date
}

export class UserEntity extends Entity<UserProps> {
    constructor(public readonly props: UserProps, id?: string) {
        UserEntity.validate(props)
        super(props, id)
        this.props.createdAt = this.props.createdAt ?? new Date()
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
        return this.props.createdAt
    }

    update(value: string): void {
        UserEntity.validate({ ...this.props, name: value })
        this.name = value
    }

    updatePassword(value: string): void {
        UserEntity.validate({ ...this.props, password: value })
        this.password = value
    }

    static validate(props: UserProps) {
        const validator = UserValidatorFactory.create()
        const isValid = validator.validate(props)
        if (!isValid) {
            throw new EntityValidationError(validator.errors)
        }
    }
}