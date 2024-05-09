/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing'
import { EnvConfigService } from '../../env-config.service'
import { EnvConfigModule } from '../../env-config.module'

describe('EnvConfigService Unit Tests', () => {
    let sut: EnvConfigService

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [EnvConfigModule.forRoot()],
            providers: [EnvConfigService],
        }).compile()

        sut = module.get<EnvConfigService>(EnvConfigService)
    })

    it('Should be defined', () => {
        expect(sut).toBeDefined()
    })

    it('Should return the variable PORT', () => {
        expect(sut.getAppPort()).toBe(4000)
    })

    it('Should return the variable NODE_ENV', () => {
        expect(sut.getNodeEnv()).toBe('test')
    } )
})