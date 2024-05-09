/* eslint-disable prettier/prettier */
export type UserProps = {
    name: string
    email: string
    password: string
    CreateAt?: Date
}

export class UserEntity {
    constructor(public readonly props: UserProps) {
        this.props.CreateAt = this.props.CreateAt ?? new Date()
    }
    get name(): string {
        return this.props.name
    }

    get email(): string {
        return this.props.email
    }

    get password(): string {
        return this.props.password
    }

    get CreateAt(): Date {
        return this.props.CreateAt
    }
}