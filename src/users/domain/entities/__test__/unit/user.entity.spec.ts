import { UserEntity, UserProps } from '../../user.entity'
import { before } from 'node:test'
import { UserDataBuilder } from '@/users/domain/testing/helpers/user-data-builder'

describe('UserEntity Unit Test', () => {
    let props: UserProps
    let sut: UserEntity
    beforeEach(() => {
        props = UserDataBuilder()
        sut = new UserEntity(props)
    })

    it('Constructor method', () => {
        expect(sut.props.name).toEqual(props.name)
        expect(sut.props.email).toEqual(props.email)
        expect(sut.props.password).toEqual(props.password)
        expect(sut.props.createdAt).toBeInstanceOf(Date)
    })

    it('Getter of name field', () => {
        expect(sut.props.name).toBeDefined()
        expect(typeof sut.props.name).toBe('string')
        expect(sut.props.name).toEqual(props.name)
    })

    it('Setter of name field', () => {
        sut['name'] = 'new name'
        expect(sut.props.name).toEqual('new name')
    })

    it('Getter of email field', () => {
        expect(sut.props.email).toBeDefined()
        expect(typeof sut.props.email).toBe('string')
        expect(sut.props.email).toEqual(props.email)
    })

    it('Getter of password field', () => {
        expect(sut.props.password).toBeDefined()
        expect(typeof sut.props.password).toBe('string')
        expect(sut.props.password).toEqual(props.password)
    })

    it('Setter of password field', () => {
        sut['password'] = 'new password'
        expect(sut.props.password).toEqual('new password')
    })

    it('Getter of CreateAt field', () => {
        expect(sut.props.createdAt).toBeDefined()
        expect(sut.props.createdAt).toBeInstanceOf(Date)
    })

    it('Should update a user - name', () => {
        sut.update('new name')
        expect(sut.props.name).toEqual('new name')
    })

    it('Should update a user - password', () => {
        sut.updatePassword('new password')
        expect(sut.props.password).toEqual('new password')
    })
})
