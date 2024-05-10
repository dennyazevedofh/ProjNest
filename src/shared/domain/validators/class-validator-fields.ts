import { validateSync } from 'class-validator'
import {
    FieldsErrors,
    ValidatorFieldsInterface
} from './validator-fields.interface'

export abstract class ClassValidatorFields<PropsValidated> implements ValidatorFieldsInterface<PropsValidated> {
    errors: FieldsErrors = null
    validatedData: PropsValidated = null
    validate(data: any): boolean {
        const errors = validateSync(data)
        if(errors.length) {
            this.errors = {}
            for (const error of errors) {
                this.errors[error.property] = Object.values(error.constraints)
            }
        } else {
            this.validatedData = data
        }
        return !errors.length
    }
}