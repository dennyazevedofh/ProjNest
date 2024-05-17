import { faker } from '@faker-js/faker'
import { UserProps } from '../../entities/user.entity'

export function UserDataBuilder(p0: {}): UserProps {
    return {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        createdAt: new Date()
    }
}