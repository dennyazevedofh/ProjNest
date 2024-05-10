import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'

@Injectable()
export class UsersService {
    create(createUserDto: CreateUserDto) {
        return 'this action adds a new user'
    }

    findAll() {
        return 'This action returns all users'
    }

    findOne(id: string) {
        return `This action returns a #${id} user`
    }

    update(id: string, updateUserDto: UpdateUserDto) {
        return `This action updates a #${id} user`
    }

    remove(id: string) {
        return `This action removes a #${id} user`
    }
}