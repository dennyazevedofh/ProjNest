import { FieldsErrors } from '../validators/validator-fields.interface'

export class ValidationError extends Error {
	constructor(message: string) {
		super(message)
		this.name = 'ValidationError'
	}
}

export class EntityValidationError extends Error {
	constructor(public errors: FieldsErrors) {
		super('Entity validation error')
		this.name = 'EntityValidationError'
	}
}