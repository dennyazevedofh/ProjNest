import { UserDataBuilder } from '@/users/domain/testing/helpers/user-data-builder'
import {
    UserRules,
    UserValidator,
    UserValidatorFactory
}  from '../../user.validator'

let sut: UserValidator

describe('UserValidator unit tests', () => {
    beforeEach(() => {
        sut = UserValidatorFactory.create()
    })

    describe('Name field', () => {
        it('Name field is null - error', () => {
            const isValid = sut.validate(null as any)
            expect(isValid).toBeFalsy()
            expect(sut.errors['name']).toStrictEqual([
                'name should not be empty',
                'name must be a string',
                'name must be shorter than or equal to 255 characters'
            ])
        })

        it('Name field is empty - error', () => {
            const isValid = sut.validate({
                ...UserDataBuilder({}),
                name: '' as any,
            })
            expect(isValid).toBeFalsy()
            expect(sut.errors['name']).toStrictEqual([
                'name should not be empty',
            ])
        })

        it('Name field is a number - error', () => {
            const isValid = sut.validate({
                ...UserDataBuilder({}),
                name: 10 as any,
            })
            expect(isValid).toBeFalsy()
            expect(sut.errors['name']).toStrictEqual([
                'name must be a string',
                'name must be shorter than or equal to 255 characters'
            ])
        })

        it('Name field is larger than 255 characters - error', () => {
            const isValid = sut.validate({
                ...UserDataBuilder({}),
                name: 'a'.repeat(256) as any,
            })
            expect(isValid).toBeFalsy()
            expect(sut.errors['name']).toStrictEqual([
                'name must be shorter than or equal to 255 characters'
            ])
        })

        it('Name field is valid', () => {
            const props = UserDataBuilder({})
            const isValid = sut.validate(props)
            expect(isValid).toBeTruthy()
            expect(sut.validatedData).toStrictEqual(new UserRules(props))
        })
    })
})

/*
name: [
    'name should not be empty',
    'name must be a string',
    'name must be shorter than or equal to 255 characters'
],
email: [
    'email should not be empty',
    'email must be a string',
    'email must be shorter than or equal to 255 characters',
    'email must be an email'
],
password: [
    'password should not be empty',
    'password must be a string',
    'password must be shorter than or equal to 100 characters'
]
*/