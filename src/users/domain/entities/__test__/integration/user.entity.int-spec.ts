import { EntityValidationError } from '../../../../../shared/domain/errors/validation-error'
import { UserDataBuilder } from '@/users/domain/testing/helpers/user-data-builder'
import { UserEntity, UserProps } from '../../user.entity'

let props: UserProps

describe('UserEntity integration tests', () => {
	beforeEach(() => {
		props = UserDataBuilder({})
	})

	describe('Constructor method', () => {

		it('Should throw an error when creating a user with invalid name - null', () => {
			const valid: UserProps = {
				...props,
				name: null as any
			}
			expect(() => new UserEntity(valid)).toThrow(EntityValidationError)
		})

		it('Should throw an error when creating a user with invalid name - empty', () => {
			const valid: UserProps = {
				...props,
				name: '' as any
			}
			expect(() => new UserEntity(valid)).toThrow(EntityValidationError)
		})

		it('Should throw an error when creating a user with invalid name - large', () => {
			const valid: UserProps = {
				...props,
				name: 'a'.repeat(256) as any
			}
			expect(() => new UserEntity(valid)).toThrow(EntityValidationError)
		})
	})
})