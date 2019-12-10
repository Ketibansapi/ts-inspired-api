import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UserAuthService {
    private readonly users: User[];
    constructor() {
        this.users = [
            {
                userId: 1,
                username: 'deary',
                password: '1234',
            },
        ];
    }

async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }

}
