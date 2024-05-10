import { ClassValidatorFields } from '../../class-validator-fields';
import * as libClassValidator from 'class-validator'

class StubClassValidatorFields extends ClassValidatorFields<{
    field: string
}> {}

describe('ClassValidatroFields unit tests', () => {
    it('Should initialize errors and validatedData as null', () => {
        const sut = new StubClassValidatorFields()
        expect(sut.errors).toBeNull()
        expect(sut.validatedData).toBeNull()
    })

    it('Should validate with errors', () => {
        const spyValidateSync = jest.spyOn(libClassValidator, 'validateSync')
        spyValidateSync.mockReturnValue([
            {
                property: 'field',
                constraints: {
                    isRequired: 'test error'
                },
            }
        ])
        const sut = new StubClassValidatorFields()
        expect(sut.validate(null)).toBeFalsy()
        expect(spyValidateSync).toHaveBeenCalled()
        expect(sut.validatedData).toBeNull()
        expect(sut.errors).toEqual({ field: ['test error']})
    })
    it('should validate without errors', () => {
        const spyValidateSync = jest.spyOn(libClassValidator, 'validateSync')
        spyValidateSync.mockReturnValue([])
        const sut = new StubClassValidatorFields()
        expect(sut.validate({ field: 'value' })).toBeTruthy()
        expect(spyValidateSync).toHaveBeenCalled()
        expect(sut.validatedData).toStrictEqual({ field: 'value' })
        expect(sut.errors).toBeNull()
    })
})