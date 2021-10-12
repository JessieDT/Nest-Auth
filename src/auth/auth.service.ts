import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) {}

    // method for validate users
    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.usersService.findOne(username);

        if (user && user.password === password) {
            const { password, username, ...rest } = user;
            // User contains id, name, username, password
            // hence the rest contains id and name
            return rest;
        }

        // if not found this user then return null
        return null;
    }

    async login(user: any) {
        const payload = { name: user.name, sub: user.id};

        return {
            access_token: this.jwtService.sign(payload),
        }
    }
}
