import { Injectable } from '@nestjs/common';

// shape of the User 
export type User = {
    id: number;
    name: string;
    username: string;
    password: string;
};

@Injectable()
export class UsersService {
    private readonly users: User[] = [
        // mock users
        {
            id: 1,
            name: 'Marius',
            username: 'marius',
            password: 'sosecure', // use bcrypt in real world
        },
        {
            id: 2,
            name: 'Mambo',
            username: 'mambo',
            password: 'dumbo',
        },
    ];

    // allow to find users by their username
    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }
}
